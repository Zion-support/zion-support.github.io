export const env Validator = {
  required: (key: string): string => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is required`);
    }
    return value;
  },
  optional: (key: string, default Value: string = ''): string => {
    return process.env[key] || default Value;
  },
  boolean: (key: string, default Value: boolean = false): boolean => {
    const value = process.env[key];
    if (value === undefined) return default Value;
    return value.to Lower Case() === 'true';
  },
  number: (key: string, default Value: number = 0): number => {
    const value = process.env[key];
    if (value === undefined) return default Value;
    const parsed = parse Int(value, 10);
    return is Na N(parsed) ? default Value : parsed;
  }
};