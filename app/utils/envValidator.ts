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
  private errors: string[] = [];
  private warnings: string[] = [];

  /**
   * Validate all environment variables
   */
  validate(): { isValid: boolean; errors: string[]; warnings: string[] } {
    this.errors = [];
    this.warnings = [];

    // Validate NODE_ENV
    this.validateNodeEnv();

    // Validate optional but recommended variables
    this.validateOptionalVars();

    return {
      isValid: this.errors.length === 0,
      errors: this.errors,
      warnings: this.warnings,
    };
  }

  private validateNodeEnv(): void {
    const nodeEnv = process.env['NODE_ENV'];
    if (!nodeEnv) {
      this.errors.push('NODE_ENV is required');
      return;
    }

    const validEnvs = ['development', 'production', 'test'];
    if (!validEnvs.includes(nodeEnv)) {
      this.errors.push(`NODE_ENV must be one of: ${validEnvs.join(', ')}`);
    }
  }

  private validateOptionalVars(): void {
    // Check for API URL
    if (!process.env['NEXT_PUBLIC_API_URL']) {
      this.warnings.push('NEXT_PUBLIC_API_URL is not set - API calls may fail');
    } else {
      try {
        new URL(process.env['NEXT_PUBLIC_API_URL']);
      } catch {
        this.errors.push('NEXT_PUBLIC_API_URL must be a valid URL');
      }
    }

    // Check for Google Analytics ID
    if (!process.env['NEXT_PUBLIC_GA_ID']) {
      this.warnings.push('NEXT_PUBLIC_GA_ID is not set - analytics will be disabled');
    }

    // Check for Site URL
    if (!process.env['NEXT_PUBLIC_SITE_URL']) {
      this.warnings.push('NEXT_PUBLIC_SITE_URL is not set - SEO may be affected');
    } else {
      try {
        new URL(process.env['NEXT_PUBLIC_SITE_URL']);
      } catch {
        this.errors.push('NEXT_PUBLIC_SITE_URL must be a valid URL');
      }
    }
  }

  /**
   * Get environment configuration
   */
  getConfig(): EnvConfig {
    return {
      NODE_ENV: (process.env['NODE_ENV'] as 'development' | 'production' | 'test') || 'development',
      NEXT_PUBLIC_API_URL: process.env['NEXT_PUBLIC_API_URL'],
      NEXT_PUBLIC_GA_ID: process.env['NEXT_PUBLIC_GA_ID'],
      NEXT_PUBLIC_SITE_URL: process.env['NEXT_PUBLIC_SITE_URL'],
    };
  }

  /**
   * Check if running in development
   */
  isDevelopment(): boolean {
    return process.env['NODE_ENV'] === 'development';
  }

  /**
   * Check if running in production
   */
  isProduction(): boolean {
    return process.env['NODE_ENV'] === 'production';
  }

  /**
   * Check if running in test
   */
  isTest(): boolean {
    return process.env['NODE_ENV'] === 'test';
  }
}

export const envValidator = new EnvValidator();
export default envValidator;