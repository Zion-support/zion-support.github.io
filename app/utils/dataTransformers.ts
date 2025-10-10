// Data transformers utility

export interface TransformOptions {
  deep?: boolean;
  preserveNull?: boolean;
  preserveUndefined?: boolean;
}

export class DataTransformers {
  /**
   * Transform object keys to camelCase
   */
  static toCamelCase<T = any>(obj: any, options: TransformOptions = {}): T {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.toCamelCase(item, options)) as T;
    }

    if (typeof obj === 'object') {
      const result: any = {};
      
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = this.camelCase(key);
        const transformedValue = options.deep ? this.toCamelCase(value, options) : value;
        result[camelKey] = transformedValue;
      }
      
      return result;
    }

    return obj;
  }

  /**
   * Transform object keys to snake_case
   */
  static toSnakeCase<T = any>(obj: any, options: TransformOptions = {}): T {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.toSnakeCase(item, options)) as T;
    }

    if (typeof obj === 'object') {
      const result: any = {};
      
      for (const [key, value] of Object.entries(obj)) {
        const snakeKey = this.snakeCase(key);
        const transformedValue = options.deep ? this.toSnakeCase(value, options) : value;
        result[snakeKey] = transformedValue;
      }
      
      return result;
    }

    return obj;
  }

  /**
   * Transform object keys to kebab-case
   */
  static toKebabCase<T = any>(obj: any, options: TransformOptions = {}): T {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.toKebabCase(item, options)) as T;
    }

    if (typeof obj === 'object') {
      const result: any = {};
      
      for (const [key, value] of Object.entries(obj)) {
        const kebabKey = this.kebabCase(key);
        const transformedValue = options.deep ? this.toKebabCase(value, options) : value;
        result[kebabKey] = transformedValue;
      }
      
      return result;
    }

    return obj;
  }

  /**
   * Flatten nested object
   */
  static flatten<T = any>(obj: any, separator: string = '.'): T {
    const result: any = {};
    
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const flattened = this.flatten(value, separator);
        for (const [nestedKey, nestedValue] of Object.entries(flattened)) {
          result[`${key}${separator}${nestedKey}`] = nestedValue;
        }
      } else {
        result[key] = value;
      }
    }
    
    return result;
  }

  /**
   * Unflatten object
   */
  static unflatten<T = any>(obj: any, separator: string = '.'): T {
    const result: any = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const keys = key.split(separator);
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!current[k] || typeof current[k] !== 'object') {
          current[k] = {};
        }
        current = current[k];
      }
      
      current[keys[keys.length - 1]] = value;
    }
    
    return result;
  }

  /**
   * Remove null and undefined values
   */
  static clean<T = any>(obj: any, options: TransformOptions = {}): T {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj
        .filter(item => {
          if (item === null && !options.preserveNull) return false;
          if (item === undefined && !options.preserveUndefined) return false;
          return true;
        })
        .map(item => this.clean(item, options)) as T;
    }

    if (typeof obj === 'object') {
      const result: any = {};
      
      for (const [key, value] of Object.entries(obj)) {
        if (value === null && !options.preserveNull) continue;
        if (value === undefined && !options.preserveUndefined) continue;
        
        const cleanedValue = options.deep ? this.clean(value, options) : value;
        result[key] = cleanedValue;
      }
      
      return result;
    }

    return obj;
  }

  /**
   * Sort object keys alphabetically
   */
  static sortKeys<T = any>(obj: any): T {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.sortKeys(item)) as T;
    }

    if (typeof obj === 'object') {
      const sortedKeys = Object.keys(obj).sort();
      const result: any = {};
      
      for (const key of sortedKeys) {
        result[key] = this.sortKeys(obj[key]);
      }
      
      return result;
    }

    return obj;
  }

  /**
   * Convert string to camelCase
   */
  private static camelCase(str: string): string {
    return str.replace(/([-_][a-z])/gi, $1 => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  }

  /**
   * Convert string to snake_case
   */
  private static snakeCase(str: string): string {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  }

  /**
   * Convert string to kebab-case
   */
  private static kebabCase(str: string): string {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
}

export default DataTransformers;