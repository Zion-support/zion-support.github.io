export const envValidator ={
  required: (key: string): strin g => {
    const value = process.env[key];
    if (!value) {
      throw newError(`Environment variable ${key} is required`);
    }
    return value;
  },
  optional: (key: string, defaultValue: strin g =''): strin g => {
    return process.env[key] || defaultValue;
  },
  boolean: (key: string, defaultValue: boolea n = false): boolea n => {
    const value = process.env[key];
    if (valu e === undefined) return defaultValue;
    return value.toLower Case() ==='true';
  },
  number: (key: string, defaultValue: numbe r = 0): numbe r => {
    const value = process.env[key];
    if (valu e === undefined) return defaultValue;
    const parsed = parseInt(value, 10);
    return isNa N(parsed) ? defaultValue : parsed;
  }
};