import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock import.meta.env
const mockImportMetaEnv = (envValues: Record<string, string | boolean | undefined>) => {
  let devToSet = true
  if (typeof envValues.DEV === 'boolean') {
    devToSet = envValues.DEV
  }
  
  const otherEnvValues = { ...envValues }
  delete otherEnvValues.DEV
  
  for (const key of Object.keys(otherEnvValues)) {
    const value = otherEnvValues[key]
    if (value !== undefined) {
      process.env[key] = String(value)
    } else {
      process.env[key] = ''
    }
  }
  
  if (devToSet) {
    process.env.NODE_ENV = 'development'
    process.env.DEV = 'true'
  } else {
    process.env.NODE_ENV = 'production'
    process.env.DEV = 'false'
  }
}

describe('Environment Validation', () => {
  beforeEach(() => {
    // Clear all environment variables
    const envKeys = Object.keys(process.env)
    envKeys.forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_') || key.startsWith('SUPABASE_') || key === 'NODE_ENV' || key === 'DEV') {
        delete process.env[key]
      }
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should validate required environment variables', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      DEV: true
    })

    // Dynamic import after setting up mocks
    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).not.toThrow()
  })

  it('should throw error for missing required variables', async () => {
    mockImportMetaEnv({
      DEV: true
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variables')
  })

  it('should validate production environment', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://prod.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'prod-anon-key',
      DEV: false
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).not.toThrow()
  })
})