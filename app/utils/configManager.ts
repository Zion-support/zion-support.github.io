'use client'
/**
 * Configuration Manager Utility
 * Provides centralized configuration management for the application
 */

export interface AppConfig {
  api: {
    baseURL: string;
    timeout: number;
    retries: number;
  };
  cache: {
    ttl: number;
    maxSize: number;
    storage: 'memory' | 'localStorage' | 'sessionStorage';
  };
  analytics: {
    enabled: boolean;
    trackingId?: string;
  };
  features: {
    [key: string]: boolean;
  };
}

class ConfigManager {
  private config: AppConfig;
  private listeners: Map<string, Array<(value: any) => void>> = new Map();

  constructor(initialConfig?: Partial<AppConfig>) {
    this.config = {
      api: {
        baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
        timeout: 10000,
        retries: 3,
        ...initialConfig?.api
      },
      cache: {
        ttl: 5 * 60 * 1000, // 5 minutes
        maxSize: 100,
        storage: 'memory',
        ...initialConfig?.cache
      },
      analytics: {
        enabled: process.env.NODE_ENV === 'production',
        trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
        ...initialConfig?.analytics
      },
      features: {
        darkMode: true,
        notifications: true,
        offlineMode: false,
        ...initialConfig?.features
      }
    };
  }

  get<K extends keyof AppConfig>(key: K): AppConfig[K] {
    return this.config[key];
  }

  getNested<K extends keyof AppConfig, N extends keyof AppConfig[K]>(
    key: K,
    nestedKey: N
  ): AppConfig[K][N] {
    return this.config[key][nestedKey];
  }

  set<K extends keyof AppConfig>(key: K, value: AppConfig[K]): void {
    const oldValue = this.config[key];
    this.config[key] = value;
    this.notifyListeners(key, value, oldValue);
  }

  setNested<K extends keyof AppConfig, N extends keyof AppConfig[K]>(
    key: K,
    nestedKey: N,
    value: AppConfig[K][N]
  ): void {
    const oldValue = this.config[key][nestedKey];
    this.config[key][nestedKey] = value;
    this.notifyListeners(`${key}.${nestedKey}`, value, oldValue);
  }

  subscribe(key: string, listener: (value: any) => void): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    
    const listeners = this.listeners.get(key)!;
    listeners.push(listener);
    
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(key: string, newValue: any, oldValue: any): void {
    const listeners = this.listeners.get(key);
    if (listeners) {
      listeners.forEach(listener => {
        try {
          listener(newValue);
        } catch (error) {
          console.error(`Error in config listener for ${key}:`, error);
        }
      });
    }
  }

  reset(): void {
    this.config = {
      api: {
        baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
        timeout: 10000,
        retries: 3
      },
      cache: {
        ttl: 5 * 60 * 1000,
        maxSize: 100,
        storage: 'memory'
      },
      analytics: {
        enabled: process.env.NODE_ENV === 'production',
        trackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID
      },
      features: {
        darkMode: true,
        notifications: true,
        offlineMode: false
      }
    };
    
    // Notify all listeners
    for (const [key, listeners] of this.listeners.entries()) {
      listeners.forEach(listener => {
        try {
          listener(this.get(key as keyof AppConfig));
        } catch (error) {
          console.error(`Error in config listener for ${key}:`, error);
        }
      });
    }
  }

  toJSON(): string {
    return JSON.stringify(this.config, null, 2);
  }

  fromJSON(json: string): void {
    try {
      const parsed = JSON.parse(json);
      this.config = { ...this.config, ...parsed };
    } catch (error) {
      console.error('Failed to parse config JSON:', error);
    }
  }
}

// Create singleton instance
export const configManager = new ConfigManager();

export default ConfigManager;