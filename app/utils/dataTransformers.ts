'use client';

/**
 * Data Transformers Utility
 * Provides data transformation and formatting functions
 */

export interface TransformOptions {
  format?: 'json' | 'xml' | 'csv' | 'yaml';
  encoding?: 'utf8' | 'base64';
  pretty?: boolean;
}

export interface DataMapping {
  [key: string]: string | DataMapping;
}

class DataTransformer {
  /**
   * Transform data according to a mapping schema
   */
  transform<T, R>(data: T, mapping: DataMapping): R {
    const result: any = {};
    
    for (const [targetKey, sourceKey] of Object.entries(mapping)) {
      if (typeof sourceKey === 'string') {
        result[targetKey] = this.getNestedValue(data, sourceKey);
      } else if (typeof sourceKey === 'object') {
        result[targetKey] = this.transform(data, sourceKey);
      }
    }
    
    return result as R;
  }

  /**
   * Get nested value from object using dot notation
   */
  private getNestedValue(obj: any, path: string): any {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  /**
   * Format data to specified format
   */
  format(data: any, options: TransformOptions = {}): string {
    const { format = 'json', pretty = false } = options;
    
    switch (format) {
      case 'json':
        return JSON.stringify(data, null, pretty ? 2 : 0);
      case 'xml':
        return this.toXML(data, pretty);
      case 'csv':
        return this.toCSV(data);
      case 'yaml':
        return this.toYAML(data, pretty);
      default:
        return JSON.stringify(data, null, pretty ? 2 : 0);
    }
  }

  /**
   * Convert data to XML format
   */
  private toXML(data: any, pretty: boolean = false): string {
    const indent = pretty ? '  ' : '';
    const newline = pretty ? '\n' : '';
    
    if (Array.isArray(data)) {
      return data.map(item => this.toXML(item, pretty)).join(newline);
    }
    
    if (typeof data === 'object' && data !== null) {
      let xml = '';
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' && value !== null) {
          xml += `${indent}<${key}>${newline}${this.toXML(value, pretty)}${newline}${indent}</${key}>${newline}`;
        } else {
          xml += `${indent}<${key}>${value}</${key}>${newline}`;
/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as unknown as T;
  }
  
  if (obj instanceof Object) {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  return obj;
}

/**
 * Merge two objects deeply
 */
export function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key] as T[Extract<keyof T, string>];
      }
    }
  }
  
  return result;
}

/**
 * Transform object keys
 */
export function transformKeys<T extends Record<string, any>>(
  obj: T,
  transformer: (key: string) => string
): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = transformer(key);
      result[newKey] = obj[key];
    }
  }
  
  return result;
}

/**
 * Convert object to camelCase
 */
export function toCamelCase<T extends Record<string, any>>(obj: T): Record<string, any> {
  return transformKeys(obj, key => 
    key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
  );
}

/**
 * Convert object to snake_case
 */
export function toSnakeCase<T extends Record<string, any>>(obj: T): Record<string, any> {
  return transformKeys(obj, key => 
    key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  );
}

/**
 * Convert object to kebab-case
 */
export function toKebabCase<T extends Record<string, any>>(obj: T): Record<string, any> {
  return transformKeys(obj, key => 
    key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
  );
}

/**
 * Flatten nested object
 */
export function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  
  return result;
}

/**
 * Unflatten object
 */
export function unflattenObject(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const keys = key.split('.');
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      return xml;
      
      current[keys[keys.length - 1]] = obj[key];
    }
    
    return String(data);
  }

  /**
   * Convert data to CSV format
   */
  private toCSV(data: any[]): string {
    if (!Array.isArray(data) || data.length === 0) {
      return '';
    }
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    
    const csvRows = data.map(row => 
      headers.map(header => {
        const value = row[header];
        return typeof value === 'string' && value.includes(',') 
          ? `"${value.replace(/"/g, '""')}"` 
          : value;
      }).join(',')
    );
    
    return [csvHeaders, ...csvRows].join('\n');
  }

  /**
   * Convert data to YAML format
   */
  private toYAML(data: any, pretty: boolean = false): string {
    const indent = pretty ? '  ' : '';
    
    if (Array.isArray(data)) {
      return data.map(item => `- ${this.toYAML(item, pretty)}`).join('\n');
    }
    
    if (typeof data === 'object' && data !== null) {
      let yaml = '';
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'object' && value !== null) {
          yaml += `${key}:\n${this.toYAML(value, pretty).split('\n').map(line => indent + line).join('\n')}\n`;
        } else {
          yaml += `${key}: ${value}\n`;
        }
      }
      return yaml;
    }
    
    return String(data);
  }

  /**
   * Normalize data structure
   */
  normalize<T>(data: T): T {
    if (Array.isArray(data)) {
      return data.map(item => this.normalize(item)) as T;
    }
    
    if (typeof data === 'object' && data !== null) {
      const normalized: any = {};
      for (const [key, value] of Object.entries(data)) {
        const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '_');
        normalized[normalizedKey] = this.normalize(value);
      }
      return normalized as T;
    }
    
    return data;
  }

  /**
   * Filter data based on criteria
   */
  filter<T>(data: T[], criteria: (item: T) => boolean): T[] {
    return data.filter(criteria);
  }

  /**
   * Sort data by specified key
   */
  sort<T>(data: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      
      if (aVal < bVal) return direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  /**
   * Group data by specified key
   */
  groupBy<T>(data: T[], key: keyof T): Record<string, T[]> {
    return data.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  /**
   * Paginate data
   */
  paginate<T>(data: T[], page: number, pageSize: number): { data: T[]; total: number; pages: number } {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    
    return {
      data: paginatedData,
      total: data.length,
      pages: Math.ceil(data.length / pageSize)
    };
  }
}

// Create singleton instance
export const dataTransformer = new DataTransformer();

export default DataTransformer;
  
  return result;
}

/**
 * Pick specific keys from object
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  
  return result;
}

/**
 * Omit specific keys from object
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  
  keys.forEach(key => {
    delete result[key];
  });
  
  return result;
}

/**
 * Filter object by predicate
 */
export function filterObject<T extends Record<string, any>>(
  obj: T,
  predicate: (value: any, key: string) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
      result[key] = obj[key];
    }
  }
  
  return result;
}

/**
 * Map object values
 */
export function mapObject<T extends Record<string, any>, U>(
  obj: T,
  mapper: (value: any, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = mapper(obj[key], key);
    }
  }
  
  return result;
}

/**
 * Group array by key
 */
export function groupBy<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key]);
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

/**
 * Sort array by key
 */
export function sortBy<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

/**
 * Remove duplicates from array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Remove duplicates by key
 */
export function uniqueBy<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K
): T[] {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}

/**
 * Chunk array into smaller arrays
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  
  return chunks;
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date: Date | string, format = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    short: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    time: { hour: '2-digit', minute: '2-digit' },
    datetime: { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
  };
  
  return d.toLocaleDateString('en-US', options[format as keyof typeof options] || options.short);
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number, suffix = '...'): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + suffix;
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convert to title case
 */
export function titleCase(text: string): string {
  return text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Convert to slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate random string
 */
export function randomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

/**
 * Generate UUID v4
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export default {
  deepClone,
  deepMerge,
  transformKeys,
  toCamelCase,
  toSnakeCase,
  toKebabCase,
  flattenObject,
  unflattenObject,
  pick,
  omit,
  filterObject,
  mapObject,
  groupBy,
  sortBy,
  unique,
  uniqueBy,
  chunk,
  formatNumber,
  formatCurrency,
  formatDate,
  truncate,
  capitalize,
  titleCase,
  slugify,
  randomString,
  generateUUID,
  debounce,
  throttle
};
