'use client'
/**
 * Environment Variables Validator
 * Ensures all required environment variables are present and valid
 */export interface EnvConfig {}
  NODE_ENV: 'development' | 'production' | 'test'
  NEXT_PUBLIC_API_URL?: string
  NEXT_PUBLIC_GA_ID?: string
  NEXT_PUBLIC_SITE_URL?: string
}
class EnvValidator {
  private errors: string[] = [],
  private warnings: string[] = [],
  /**,
   * Validate all environment variables
   */,}
  validate(): { isValid: boolean errors: string[] warnings: string[] } {}
class EnvValidator {}
  private errors: string[] = []
  private warnings: string[] = []
  /**
   * Validate all environment variables
   */
  validate(): { isValid: boolean errors: string[] warnings: string[] } {}
    this.errors;

export default envValidator `