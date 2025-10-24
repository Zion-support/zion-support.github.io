import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Mock import.meta.env
const mockImportMetaEnv = (envValues: Record<string, string | boolean | undefined>) => {
  let devToSet = true
  if (typeof envValues.DEV === 'boolean') {
    devToSet = envValues.DEV
  }
  
  // Separate DEV from other envValues for clarity
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
  
  // Apply DEV last. For Jest, this usually means setting NODE_ENV or a specific mock
  // if the code directly uses import.meta.env.DEV.
  // Assuming babel-plugin-transform-import-meta or ts-jest handles import.meta.env.DEV
  // to read from process.env.DEV or process.env.NODE_ENV.
  if (devToSet) {
    process.env.NODE_ENV = 'development'
    process.env.DEV = 'true'
  } else {
    process.env.NODE_ENV = 'production'
    process.env.DEV = 'false'
  }
}

describe('validateEnv', () => {
  beforeEach(() => {
    // Clear all environment variables before each test
    const envKeys = Object.keys(process.env)
    envKeys.forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_') || key.startsWith('SUPABASE_') || key === 'NODE_ENV' || key === 'DEV') {
        delete process.env[key]
      }
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
    // Clean up after each test
    const envKeys = Object.keys(process.env)
    envKeys.forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_') || key.startsWith('SUPABASE_') || key === 'NODE_ENV' || key === 'DEV') {
        delete process.env[key]
      }
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variables')
  })

  it('should pass validation with all required environment variables', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      DEV: true
    })

    // Dynamic import after setting up mocks
    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).not.toThrow()
  })

  it('should throw error when NEXT_PUBLIC_SUPABASE_URL is missing', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      DEV: true
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variable: NEXT_PUBLIC_SUPABASE_URL')
  })

  it('should throw error when NEXT_PUBLIC_SUPABASE_ANON_KEY is missing', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      DEV: true
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY')
  })

  it('should throw error when SUPABASE_SERVICE_ROLE_KEY is missing', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      DEV: true
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY')
  })

  it('should throw error when multiple environment variables are missing', async () => {
    mockImportMetaEnv({
      DEV: true
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow()
  })

  it('should work in production mode', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://test.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      DEV: false
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).not.toThrow()
  })
})