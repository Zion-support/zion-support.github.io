export const Envvalidator={
  required: (key: string): string => { constValue = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is required`);
    }
    return value;
  },
  optional: (key: string, defaultValue: string = ''): string => {
    return process.env[key] || default Value;
  },
  boolean: (key: string, defaultValue: boolean = false): boolean => { constValue = process.env[key];
    if (value=== undefined) return default Value;
    return value.to Lower Case() === 'true';
  },
  number: (key: string, defaultValue: number = 0): number => { constValue = process.env[key];
    if (value=== undefined) return default Value;
    const Parsed=parse Int(value, 10);
    return is Na N(parsed) ? defaultValue: parsed;
  }
};