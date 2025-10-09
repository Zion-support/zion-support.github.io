'use client';
/**
 * Environment Variables Validator
 * Ensures all required environment variables are present and valid
 */
export interface EnvConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SITE_URL?: string;
}
class EnvValidator {
  private errors: string[] = []
  private warnings: string[] = []
  /**
   * Validate all environment variables
   */
  validate(): { isValid: boolean; errors: string[]; warnings: string[] } {
    this.errors = []
    this.warnings = []
    // Validate NODE_ENV
    this.validateNodeEnv()
    // Validate optional but recommended variables
    this.validateOptionalVars()
    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings
    };
  }
  /**
   * Get validated environment configuration
   */
  getConfig(): EnvConfig {
    const validation = this.validate()
    if (!validation.isValid) {
      throw new Error(
        `Environment validation failed:\n${validation.errors.join('\n')}`
      )
    }
    if (validation.warnings.length > 0) {
      }`
      )
    }
    return {
      NODE_ENV: this.getNodeEnv(),
      NEXT_PUBLIC_API_URL: process.env['NEXT_PUBLIC_API_URL'],
      NEXT_PUBLIC_GA_ID: process.env['NEXT_PUBLIC_GA_ID'],
      NEXT_PUBLIC_SITE_URL: process.env['NEXT_PUBLIC_SITE_URL']
    };
  }
  private validateNodeEnv(): void {
    const nodeEnv = process.env['NODE_ENV']
    const validEnvs = ['development', 'production', 'test']
    if (!nodeEnv) {
      this.errors.push('NODE_ENV is not set')
      return
    }
    if (!validEnvs.includes(nodeEnv)) {
      this.errors.push(
        `NODE_ENV must be one of: ${validEnvs.join(', ')}. Got: ${nodeEnv}`
      )
    }
  }
  private validateOptionalVars(): void {
    const nodeEnv = this.getNodeEnv()
    // In production, these should be set
    if (nodeEnv === 'production') {
      if (!process.env['NEXT_PUBLIC_SITE_URL']) {
        this.warnings.push(
          'NEXT_PUBLIC_SITE_URL is not set (recommended for production)'
        )
      }
      if (!process.env['NEXT_PUBLIC_GA_ID']) {
        this.warnings.push(
          'NEXT_PUBLIC_GA_ID is not set (analytics will be disabled)'
        )
      }
    }
  }
  private getNodeEnv(): 'development' | 'production' | 'test' {
    const env = process.env['NODE_ENV'] || 'development'
    return env as 'development' | 'production' | 'test'
  }
}
// Export singleton instance
export const envValidator = new EnvValidator()
// Export convenience function
export function validateEnv(): EnvConfig {
  return envValidator.getConfig()
}
export default envValidator
