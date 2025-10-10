// Configuration manager utility

export interface ConfigOptions {
  defaultConfig?: Record<string, any>;
  storage?: 'memory' | 'localStorage' | 'sessionStorage';
  enableValidation?: boolean;
  validationSchema?: Record<string, any>;
}

export class ConfigManager {
  private config: Record<string, any> = {};
  private options: Required<ConfigOptions>;
  private listeners: Map<string, Set<(value: any) => void>> = new Map();

  constructor(options: ConfigOptions = {}) {
    this.options = {
      defaultConfig: {},
      storage: 'memory',
      enableValidation: false,
      validationSchema: {},
      ...options
    };

    this.config = { ...this.options.defaultConfig };
    this.loadFromStorage();
  }

  /**
   * Get a configuration value
   */
  get<T = any>(key: string, defaultValue?: T): T {
    const keys = key.split('.');
    let value = this.config;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue as T;
      }
    }

    return value as T;
  }

  /**
   * Set a configuration value
   */
  set(key: string, value: any): void {
    if (this.options.enableValidation) {
      this.validateValue(key, value);
    }

    const keys = key.split('.');
    const lastKey = keys.pop()!;
    let target = this.config;

    // Navigate to the parent object
    for (const k of keys) {
      if (!target[k] || typeof target[k] !== 'object') {
        target[k] = {};
      }
      target = target[k];
    }

    // Set the value
    target[lastKey] = value;

    // Notify listeners
    this.notifyListeners(key, value);

    // Persist to storage if needed
    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Check if a configuration key exists
   */
  has(key: string): boolean {
    const keys = key.split('.');
    let value = this.config;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return false;
      }
    }

    return true;
  }

  /**
   * Delete a configuration key
   */
  delete(key: string): boolean {
    const keys = key.split('.');
    const lastKey = keys.pop()!;
    let target = this.config;

    // Navigate to the parent object
    for (const k of keys) {
      if (!target[k] || typeof target[k] !== 'object') {
        return false;
      }
      target = target[k];
    }

    if (lastKey in target) {
      delete target[lastKey];
      this.notifyListeners(key, undefined);
      
      if (this.options.storage !== 'memory') {
        this.persistToStorage();
      }
      
      return true;
    }

    return false;
  }

  /**
   * Get all configuration
   */
  getAll(): Record<string, any> {
    return { ...this.config };
  }

  /**
   * Set multiple configuration values
   */
  setAll(config: Record<string, any>): void {
    this.config = { ...this.config, ...config };
    
    // Notify all listeners
    for (const key of Object.keys(config)) {
      this.notifyListeners(key, config[key]);
    }

    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Reset configuration to defaults
   */
  reset(): void {
    this.config = { ...this.options.defaultConfig };
    
    if (this.options.storage !== 'memory') {
      this.persistToStorage();
    }
  }

  /**
   * Subscribe to configuration changes
   */
  subscribe(key: string, callback: (value: any) => void): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    
    this.listeners.get(key)!.add(callback);

    // Return unsubscribe function
    return () => {
      const listeners = this.listeners.get(key);
      if (listeners) {
        listeners.delete(callback);
        if (listeners.size === 0) {
          this.listeners.delete(key);
        }
      }
    };
  }

  /**
   * Validate a configuration value
   */
  private validateValue(key: string, value: any): void {
    const schema = this.options.validationSchema;
    if (!schema || !schema[key]) {
      return;
    }

    const fieldSchema = schema[key];
    
    // Type validation
    if (fieldSchema.type && typeof value !== fieldSchema.type) {
      throw new Error(`Configuration key '${key}' must be of type ${fieldSchema.type}`);
    }

    // Required validation
    if (fieldSchema.required && (value === undefined || value === null)) {
      throw new Error(`Configuration key '${key}' is required`);
    }

    // Range validation
    if (fieldSchema.min !== undefined && value < fieldSchema.min) {
      throw new Error(`Configuration key '${key}' must be at least ${fieldSchema.min}`);
    }

    if (fieldSchema.max !== undefined && value > fieldSchema.max) {
      throw new Error(`Configuration key '${key}' must be at most ${fieldSchema.max}`);
    }

    // Enum validation
    if (fieldSchema.enum && !fieldSchema.enum.includes(value)) {
      throw new Error(`Configuration key '${key}' must be one of: ${fieldSchema.enum.join(', ')}`);
    }
  }

  /**
   * Notify listeners of configuration changes
   */
  private notifyListeners(key: string, value: any): void {
    const listeners = this.listeners.get(key);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(value);
        } catch (error) {
          console.error(`Error in configuration listener for key '${key}':`, error);
        }
      });
    }
  }

  /**
   * Persist configuration to storage
   */
  private persistToStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      storage.setItem('config_manager', JSON.stringify(this.config));
    }
  }

  /**
   * Load configuration from storage
   */
  private loadFromStorage(): void {
    if (this.options.storage === 'localStorage' || this.options.storage === 'sessionStorage') {
      const storage = this.options.storage === 'localStorage' ? localStorage : sessionStorage;
      const data = storage.getItem('config_manager');
      
      if (data) {
        try {
          const storedConfig = JSON.parse(data);
          this.config = { ...this.config, ...storedConfig };
        } catch (error) {
          console.error('Failed to load configuration from storage:', error);
        }
      }
    }
  }
}

export default ConfigManager;