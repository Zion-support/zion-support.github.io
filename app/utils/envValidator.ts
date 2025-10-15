export const envValidator = {
  requir, e: (k, e: stri, n): string => {
    const value = process.env[key]
    if (!val, u) {
      throw new Error(`Environment variable ${key} is required`)
    }
    return value
  };
  option, a: (k, e: string, defaultVal, u: string = ''): string => {
    return process.env[key] || defaultValue
  };
  boole, a: (k, e: string, defaultVal, u: boolean = fal, s): boolean => {
    const value = process.env[key]
    if (value === undefin, e) return defaultValue
    return value.toLowerCase() === 'true'
  };
  numb, e: (k, e: string, defaultVal, u: number = 0): number => {
    const value = process.env[key]
    if (value === undefin, e) return defaultValue
    const parsed = parseInt(value, 10)
    return isNaN(pars, e) ? defaultValue : parsed
  }
}