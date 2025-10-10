// Environment configuration utility

export interface EnvConfigOptions {
  prefix?: string;
  required?: string[];
  defaults?: Record<string, any>;
  validators?: Record<string, (value: string) => boolean>;
  transformers?: Record<string, (value: string) => any>;
}

export class EnvConfig {
  private options: Required<EnvConfigOptions>;
  private config: Record<string, any> = {};

  constructor(options: EnvConfigOptions = {}) {
    this.options = {
      prefix: 'REACT_APP_',
      required: [],
      defaults: {},
      validators: {},
      transformers: {},
      ...options
    };

    this.loadConfig();
    this.validateConfig();
  }

  /**
   * Get a configuration value
   */
  get<T = any>(key: string, defaultValue?: T): T {
    return this.config[key] ?? defaultValue;
  }

  /**
   * Check if a configuration key exists
   */
  has(key: string): boolean {
    return key in this.config;
  }

  /**
   * Get all configuration
   */
  getAll(): Record<string, any> {
    return { ...this.config };
  }

  /**
   * Set a configuration value
   */
  set(key: string, value: any): void {
    this.config[key] = value;
  }

  /**
   * Load configuration from environment variables
   */
  private loadConfig(): void {
    // Load from process.env
    if (typeof process !== 'undefined' && process.env) {
      this.loadFromProcessEnv();
    }

    // Load from window.env (for runtime configuration)
    if (typeof window !== 'undefined' && (window as any).env) {
      this.loadFromWindowEnv();
    }

    // Apply defaults
    this.applyDefaults();
  }

  /**
   * Load from process.env
   */
  private loadFromProcessEnv(): void {
    for (const [key, value] of Object.entries(process.env)) {
      if (key.startsWith(this.options.prefix)) {
        const configKey = key.substring(this.options.prefix.length);
        this.config[configKey] = this.transformValue(configKey, value);
      }
    }
  }

  /**
   * Load from window.env
   */
  private loadFromWindowEnv(): void {
    const windowEnv = (window as any).env;
    for (const [key, value] of Object.entries(windowEnv)) {
      this.config[key] = this.transformValue(key, value);
    }
  }

  /**
   * Apply default values
   */
  private applyDefaults(): void {
    for (const [key, value] of Object.entries(this.options.defaults)) {
      if (!(key in this.config)) {
        this.config[key] = value;
      }
    }
  }

  /**
   * Transform value using transformers
   */
  private transformValue(key: string, value: string | undefined): any {
    if (value === undefined) {
      return undefined;
    }

    // Apply transformer if available
    if (this.options.transformers[key]) {
      return this.options.transformers[key](value);
    }

    // Default transformations
    if (value === 'true') return true;
    if (value === 'false') return false;
    if (value === 'null') return null;
    if (value === 'undefined') return undefined;
    
    // Try to parse as number
    if (!isNaN(Number(value)) && value !== '') {
      return Number(value);
    }

    // Try to parse as JSON
    if (value.startsWith('{') || value.startsWith('[')) {
      try {
        return JSON.parse(value);
      } catch {
        // Return as string if JSON parsing fails
      }
    }

    return value;
  }

  /**
   * Validate configuration
   */
  private validateConfig(): void {
    // Check required variables
    for (const key of this.options.required) {
      if (!(key in this.config)) {
        throw new Error(`Required environment variable ${this.options.prefix}${key} is not set`);
      }
    }

    // Validate values
    for (const [key, value] of Object.entries(this.config)) {
      if (this.options.validators[key]) {
        if (!this.options.validators[key](String(value))) {
          throw new Error(`Environment variable ${this.options.prefix}${key} has invalid value: ${value}`);
        }
      }
    }
  }

  /**
   * Get configuration as environment variables
   */
  toEnvVars(): Record<string, string> {
    const envVars: Record<string, string> = {};
    
    for (const [key, value] of Object.entries(this.config)) {
      envVars[`${this.options.prefix}${key}`] = String(value);
    }
    
    return envVars;
  }

  /**
   * Get configuration as URL search params
   */
  toSearchParams(): URLSearchParams {
    const params = new URLSearchParams();
    
    for (const [key, value] of Object.entries(this.config)) {
      params.set(key, String(value));
    }
    
    return params;
  }

  /**
   * Get configuration as query string
   */
  toQueryString(): string {
    return this.toSearchParams().toString();
  }

  /**
   * Load configuration from URL search params
   */
  loadFromSearchParams(searchParams: URLSearchParams): void {
    for (const [key, value] of searchParams.entries()) {
      this.config[key] = this.transformValue(key, value);
    }
  }

  /**
   * Load configuration from query string
   */
  loadFromQueryString(queryString: string): void {
    const params = new URLSearchParams(queryString);
    this.loadFromSearchParams(params);
  }

  /**
   * Get configuration summary
   */
  getSummary(): {
    totalKeys: number;
    requiredKeys: string[];
    missingKeys: string[];
    optionalKeys: string[];
  } {
    const allKeys = Object.keys(this.config);
    const requiredKeys = this.options.required;
    const missingKeys = requiredKeys.filter(key => !(key in this.config));
    const optionalKeys = allKeys.filter(key => !requiredKeys.includes(key));

    return {
      totalKeys: allKeys.length,
      requiredKeys,
      missingKeys,
      optionalKeys
    };
  }
}

export default EnvConfig;