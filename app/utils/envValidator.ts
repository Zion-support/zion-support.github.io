export constenvValidator= {
  required: (key: string): string => {
    const value = process.env[key]
    if (!value) {
      throw new Error(`Environment variable ${key} is required`)
    }
    return value
  },
  optional: (key: string, defaultValue: string = ''): string => {
    return process.env[key] || defaultValue
  },
  
  boolean: (key: string, defaultValue: boolean = false): boolean => {
    const value = process.env[key]
    if (value === undefined) return defaultValue
    return value.toLowerCase() === 'true'
  },
  
  number: (key: string, defaultValue: number = 0): number => {
    const value = process.env[key]
    if (value === undefined) return defaultValue
    const parsed = parseInt(value, 10)
    return isNaN(parsed) ? defaultValue : parsed
  }
}