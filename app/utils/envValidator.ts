/**
 * Environment Configuration Validator
 * Validates and provides type-safe access to environment variables
 */

export interface EnvironmentConfig {
  // App Configuration
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_API_URL: string;
  
  // Feature Flags
  NEXT_PUBLIC_ENABLE_ANALYTICS?: string;
  NEXT_PUBLIC_ENABLE_ERROR_REPORTING?: string;
  NEXT_PUBLIC_ENABLE_PWA?: string;
  
  // API Keys
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
  
  // Other
  NEXT_PUBLIC_ERROR_LOG_ENDPOINT?: string;
  ALLOWED_ORIGIN?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  config: Partial<EnvironmentConfig>;
}

class EnvValidator {
  private config: Partial<EnvironmentConfig> = {};
  private errors: string[] = [];
  private warnings: string[] = [];

  /**
   * Validate environment configuration
   */
  validate(): ValidationResult {
    this.errors = [];
    this.warnings = [];
    this.config = {};

    // Required variables
    this.validateRequired('NODE_ENV', ['development', 'production', 'test']);
    
    // Optional but recommended variables
    this.validateOptional('NEXT_PUBLIC_APP_URL');
    this.validateOptional('NEXT_PUBLIC_API_URL');
    
    // Feature flags
    this.validateBoolean('NEXT_PUBLIC_ENABLE_ANALYTICS');
    this.validateBoolean('NEXT_PUBLIC_ENABLE_ERROR_REPORTING');
    this.validateBoolean('NEXT_PUBLIC_ENABLE_PWA');
    
    // API Keys
    this.validateOptional('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID');
    this.validateOptional('NEXT_PUBLIC_SENTRY_DSN');
    
    // Validate URL formats
    this.validateURL('NEXT_PUBLIC_APP_URL');
    this.validateURL('NEXT_PUBLIC_API_URL');
    this.validateURL('NEXT_PUBLIC_ERROR_LOG_ENDPOINT');
    
    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
      config: this.config,
    };
  }

  /**
   * Validate required variable
   */
  private validateRequired(
    key: keyof EnvironmentConfig,
    allowedValues?: string[]
  ): void {
    const value = this.getEnvValue(key);
    
    if (!value) {
      this.errors.push(`Missing required environment variable: ${key}`);
      return;
    }

    if (allowedValues && !allowedValues.includes(value)) {
      this.errors.push(
        `Invalid value for ${key}. Expected one of: ${allowedValues.join(', ')}`
      );
      return;
    }

    this.config[key] = value as never;
  }

  /**
   * Validate optional variable
   */
  private validateOptional(key: keyof EnvironmentConfig): void {
    const value = this.getEnvValue(key);
    
    if (!value) {
      this.warnings.push(`Optional environment variable not set: ${key}`);
      return;
    }

    this.config[key] = value as never;
  }

  /**
   * Validate boolean variable
   */
  private validateBoolean(key: keyof EnvironmentConfig): void {
    const value = this.getEnvValue(key);
    
    if (!value) {
      return;
    }

    const lowerValue = value.toLowerCase();
    if (!['true', 'false', '1', '0', 'yes', 'no'].includes(lowerValue)) {
      this.warnings.push(
        `Invalid boolean value for ${key}: ${value}. Expected: true/false/1/0/yes/no`
      );
      return;
    }

    this.config[key] = value as never;
  }

  /**
   * Validate URL format
   */
  private validateURL(key: keyof EnvironmentConfig): void {
    const value = this.getEnvValue(key);
    
    if (!value) {
      return;
    }

    try {
      new URL(value);
      this.config[key] = value as never;
    } catch {
      this.errors.push(`Invalid URL format for ${key}: ${value}`);
    }
  }

  /**
   * Get environment value
   */
  private getEnvValue(key: string): string | undefined {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key];
    }
    return undefined;
  }

  /**
   * Get validated config
   */
  getConfig(): Partial<EnvironmentConfig> {
    return { ...this.config };
  }

  /**
   * Check if feature is enabled
   */
  isFeatureEnabled(feature: string): boolean {
    const value = this.config[`NEXT_PUBLIC_ENABLE_${feature.toUpperCase()}` as keyof EnvironmentConfig];
    if (!value) return false;
    
    const strValue = String(value).toLowerCase();
    return ['true', '1', 'yes'].includes(strValue);
  }
}

// Singleton instance
const envValidator = new EnvValidator();

// Validate on import
const validationResult = envValidator.validate();

// Log validation results in development
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  if (validationResult.errors.length > 0) {
    console.error('❌ Environment Configuration Errors:');
    validationResult.errors.forEach((error) => console.error(`  - ${error}`));
  }
  
  if (validationResult.warnings.length > 0) {
    console.warn('⚠️ Environment Configuration Warnings:');
    validationResult.warnings.forEach((warning) => console.warn(`  - ${warning}`));
  }
  
  if (validationResult.errors.length === 0 && validationResult.warnings.length === 0) {
    console.log('✅ Environment configuration is valid');
  }
}

// Export utilities
export const getEnvConfig = () => envValidator.getConfig();
export const isFeatureEnabled = (feature: string) => envValidator.isFeatureEnabled(feature);
export const validateEnv = () => envValidator.validate();

// Environment helper functions
export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const isTest = () => {
  return process.env.NODE_ENV === 'test';
};

export default envValidator;
