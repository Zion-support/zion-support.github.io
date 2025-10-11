import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// Store original process.env
const ORIGINAL_ENV = process.env

// Helper to set and reset process.env for Vitest tests
const mockProcessEnv = (envValues: Record<string, string | boolean | undefined>) => {
  process.env = { ...ORIGINAL_ENV } // Start with a fresh copy of original env
  // Set specific values for the test
  for (const key in envValues) {
    if (envValues[key] !== undefined) {
      process.env[key] = String(envValues[key])
    } else {
      delete process.env[key] // Ensure it's treated as undefined by the code
    }
  }
}

describe('checkEssentialEnvVars', () => {
  beforeEach(() => {
    vi.resetModules() // Clears the cache for modules, useful when env vars change
    // process.env will be set by mockProcessEnv in each test
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV // Restore original environment
    vi.restoreAllMocks()
  })

  it('should not throw an error when all essential environment variables are set correctly', () => {
    mockProcessEnv({
      NODE_ENV: 'development', // checkEssentialEnvVars is for non-production
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })
    // Dynamically import after mocking
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).not.toThrow()
    })
  })

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is missing', () => {
    mockProcessEnv({
      NODE_ENV: 'development',      // NEXT_PUBLIC_REOWN_PROJECT_ID is missing
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/)
    })
  })

  it('should throw an error if NEXT_PUBLIC_SUPABASE_URL is empty', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: '', // Empty value
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL is not defined or is empty/)
    })
  })

  it('should throw an error if NEXT_PUBLIC_SUPABASE_ANON_KEY is missing', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      // NEXT_PUBLIC_SUPABASE_ANON_KEY is missing
    })
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or is empty/)
    })
  })

  it('should throw an error if NEXT_PUBLIC_SUPABASE_URL is set to placeholder value', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'your_supabase_url_here', // Placeholder value
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL is set to a placeholder value/)
    })
  })

  it('should throw multiple errors when multiple variables are missing', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      // All essential variables are missing
    })
    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars()
        expect.fail('Expected function to throw')
      } catch (error) {
        const errorMessage = error.message
        expect(errorMessage).toMatch(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/)
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_URL is not defined or is empty/)
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or is empty/)
      }
    })
  })
})