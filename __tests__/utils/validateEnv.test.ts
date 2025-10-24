import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock process.env
const originalEnv = process.env

beforeEach(() => {
  vi.resetModules()
  process.env = { ...originalEnv }
})

afterEach(() => {
  process.env = originalEnv
})

describe('validateEnv', () => {
  it('should validate required environment variables', async () => {
    // Set up required environment variables
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).not.toThrow()
  })

  it('should throw error for missing required variables', async () => {
    // Clear all environment variables
    process.env = {}

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing NEXT_PUBLIC_SUPABASE_URL', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing NEXT_PUBLIC_SUPABASE_ANON_KEY', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing SUPABASE_SERVICE_ROLE_KEY', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing DATABASE_URL', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing NEXTAUTH_SECRET', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should throw error for missing NEXTAUTH_URL', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should validate optional environment variables when present', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'
    process.env.REDIS_URL = 'redis://localhost:6379'
    process.env.STRIPE_SECRET_KEY = 'sk_test_123'
    process.env.STRIPE_PUBLISHABLE_KEY = 'pk_test_123'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).not.toThrow()
  })

  it('should handle empty string values as missing', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = ''
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })

  it('should handle undefined values as missing', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = undefined as any
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service-key'
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test'
    process.env.NEXTAUTH_SECRET = 'test-secret'
    process.env.NEXTAUTH_URL = 'http://localhost:3000'

    const { validateEnv } = await import('@/utils/validateEnv')
    
    expect(() => validateEnv()).toThrow('Missing required environment variables')
  })
})