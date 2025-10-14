export const envValidator = {
  required: (key: string): string => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is required`);
    }
    return value;
  },
  
  optional: (key: string, defaultValue?: string): string | undefined => {
    return process.env[key] || defaultValue;
  },
  
  boolean: (key: string, defaultValue: boolean = false): boolean => {
    const value = process.env[key];
    if (!value) return defaultValue;
    return value.toLowerCase() === 'true';
  },
  
  number: (key: string, defaultValue?: number): number | undefined => {
    const value = process.env[key];
    if (!value) return defaultValue;
    const num = parseInt(value, 10);
    return isNaN(num) ? defaultValue : num;
  }
};