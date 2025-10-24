import { describe, it, expect, beforeEach, vi } from 'vitest'
import { validateEnv } from '@/app/utils/validateEnv'

// Mock console methods
const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
const mockConsoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})

describe('validateEnv', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.clearAllMocks()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('should validate required environment variables', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'

    const result = validateEnv()

    expect(result.isValid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('should return errors for missing required variables', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = ''
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = ''
    process.env.DATABASE_URL = ''

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors).toContain('NEXT_PUBLIC_SUPABASE_URL is required')
    expect(result.errors).toContain('NEXT_PUBLIC_SUPABASE_ANON_KEY is required')
    expect(result.errors).toContain('DATABASE_URL is required')
  })

  it('should validate URL format for Supabase URL', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'invalid-url'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors).toContain('NEXT_PUBLIC_SUPABASE_URL must be a valid URL')
  })

  it('should validate URL format for Database URL', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'invalid-db-url'

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors).toContain('DATABASE_URL must be a valid PostgreSQL URL')
  })

  it('should validate optional environment variables when present', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://test@sentry.io/test'

    const result = validateEnv()

    expect(result.isValid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('should warn about missing optional variables', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    // Optional variables not set

    const result = validateEnv()

    expect(result.isValid).toBe(true)
    expect(mockConsoleWarn).toHaveBeenCalledWith(
      expect.stringContaining('NEXT_PUBLIC_GA_MEASUREMENT_ID is not set')
    )
  })

  it('should validate Google Analytics ID format', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'invalid-ga-id'

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors).toContain('NEXT_PUBLIC_GA_MEASUREMENT_ID must be a valid Google Analytics ID')
  })

  it('should validate Sentry DSN format', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'invalid-sentry-dsn'

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors).toContain('NEXT_PUBLIC_SENTRY_DSN must be a valid Sentry DSN')
  })

  it('should handle multiple validation errors', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'invalid-url'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = ''
    process.env.DATABASE_URL = 'invalid-db-url'
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'invalid-ga-id'

    const result = validateEnv()

    expect(result.isValid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(3)
  })

  it('should log errors to console when validation fails', () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = ''
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = ''
    process.env.DATABASE_URL = ''

    validateEnv()

    expect(mockConsoleError).toHaveBeenCalledWith(
      expect.stringContaining('Environment validation failed')
    )
  })
})