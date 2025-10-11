import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// Store original process.env
const ORIGINAL_ENV = process.env

// Helper to set and reset process.env for Vitest tests
const mockProcessEnv = (envValues: Record<string, string | boolean | undefined>) => {
  // Clear existing env vars
  Object.keys(process.env).forEach(key => {
    if (key.startsWith('VITE_')) {
      delete process.env[key]
    }
  })
  
  // Set new env vars
  Object.entries(envValues).forEach(([key, value]) => {
    if (value !== undefined) {
      process.env[key] = String(value)
    }
  })
}

describe('checkEssentialEnvVars', () => {
  beforeEach(() => {
    vi.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })

  afterEach(() => {
    process.env = { ...ORIGINAL_ENV }
    vi.restoreAllMocks()
  })

  it('should not throw an error when all essential environment variables are set correctly', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })

    const module = await import('@/utils/validateEnv')
    expect(() => module.checkEssentialEnvVars()).not.toThrow()
  })

  it('should throw an error if VITE_REOWN_PROJECT_ID is missing', async () => {
    mockProcessEnv({
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })

    const module = await import('@/utils/validateEnv')
    expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_REOWN_PROJECT_ID is not defined or is empty/)
  })

  it('should throw an error if VITE_SUPABASE_URL is empty', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: '',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })

    const module = await import('@/utils/validateEnv')
    expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_SUPABASE_URL is not defined or is empty/)
  })

  it('should throw an error if VITE_SUPABASE_ANON_KEY is a placeholder value', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here',
    })

    const module = await import('@/utils/validateEnv')
    expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_SUPABASE_ANON_KEY is set to a placeholder value/)
  })

  it('should throw an error if VITE_REOWN_PROJECT_ID is a placeholder value', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'YOUR_PROJECT_ID',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_supabase_key',
    })

    const module = await import('@/utils/validateEnv')
    expect(() => module.checkEssentialEnvVars()).toThrowError(/VITE_REOWN_PROJECT_ID is set to a placeholder value/)
  })

  it('should throw an error listing multiple missing or invalid variables', async () => {
    mockProcessEnv({
      VITE_SUPABASE_URL: 'your_supabase_url_here',
    })

    const module = await import('@/utils/validateEnv')
    try {
      module.checkEssentialEnvVars()
      throw new Error("checkEssentialEnvVars did not throw an error as expected")
    } catch (error: any) {
      const errorMessage = error.message
      expect(errorMessage).toMatch(/VITE_REOWN_PROJECT_ID is not defined or is empty/)
      expect(errorMessage).toMatch(/VITE_SUPABASE_URL is set to a placeholder value/)
      expect(errorMessage).toMatch(/VITE_SUPABASE_ANON_KEY is not defined or is empty/)
    }
  })
})