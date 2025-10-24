<<<<<<< HEAD
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
=======
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
>>>>>>> cursor/fix-errors-and-merge-to-main-2480

// Mock import.meta.env
const mockImportMetaEnv = (envValues: Record<string, string | boolean | undefined>) => {
  let devToSet = true
  if (typeof envValues.DEV === 'boolean') {
    devToSet = envValues.DEV
  }
  
<<<<<<< HEAD
=======
  // Separate DEV from other envValues for clarity
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
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
  
<<<<<<< HEAD
=======
  // Apply DEV last. For Jest, this usually means setting NODE_ENV or a specific mock
  // if the code directly uses import.meta.env.DEV.
  // Assuming babel-plugin-transform-import-meta or ts-jest handles import.meta.env.DEV
  // to read from process.env.DEV or process.env.NODE_ENV.
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
  if (devToSet) {
    process.env.NODE_ENV = 'development'
    process.env.DEV = 'true'
  } else {
    process.env.NODE_ENV = 'production'
    process.env.DEV = 'false'
  }
}

<<<<<<< HEAD
describe('Environment Validation', () => {
  beforeEach(() => {
    // Clear all environment variables
=======
describe('validateEnv', () => {
  beforeEach(() => {
    // Clear all environment variables before each test
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    const envKeys = Object.keys(process.env)
    envKeys.forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_') || key.startsWith('SUPABASE_') || key === 'NODE_ENV' || key === 'DEV') {
        delete process.env[key]
      }
    })
  })

  afterEach(() => {
<<<<<<< HEAD
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
=======
    // Clean up after each test
    const envKeys = Object.keys(process.env)
    envKeys.forEach(key => {
      if (key.startsWith('NEXT_PUBLIC_') || key.startsWith('SUPABASE_') || key === 'NODE_ENV' || key === 'DEV') {
        delete process.env[key]
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
    expect(() => checkEssentialEnvVars()).toThrow('Missing required environment variables')
  })

<<<<<<< HEAD
  it('should validate production environment', async () => {
    mockImportMetaEnv({
      NEXT_PUBLIC_SUPABASE_URL: 'https://prod.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'prod-anon-key',
      DEV: false
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    })

    const { checkEssentialEnvVars } = await import('@/utils/validateEnv')
    
<<<<<<< HEAD
=======
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
    
>>>>>>> cursor/fix-errors-and-merge-to-main-2480
    expect(() => checkEssentialEnvVars()).not.toThrow()
  })
})