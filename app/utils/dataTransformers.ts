'use client'
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
        }
      }
      return xml;
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