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
      delete process.env[key]
    }
  }
}
describe('validateEnv', () => {
  beforeEach(() => {
    vi.resetModules()
  })
  afterEach(() => {
    process.env = ORIGINAL_ENV
  })
it('should pass with all required environment variables set', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'test-project-id',
      VITE_SUPABASE_URL: 'https://test.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'test-anon-key'
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    expect(() => validateEnv()).not.toThrow()
  })
  it('should throw error when VITE_REOWN_PROJECT_ID is missing', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: undefined,
      VITE_SUPABASE_URL: 'https://test.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'test-anon-key'
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    expect(() => validateEnv()).toThrow()
  })
  it('should throw error when VITE_SUPABASE_URL is missing', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'test-project-id',
      VITE_SUPABASE_URL: undefined,
      VITE_SUPABASE_ANON_KEY: 'test-anon-key'
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    expect(() => validateEnv()).toThrow()
  })
  it('should throw error when VITE_SUPABASE_ANON_KEY is missing', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'test-project-id',
      VITE_SUPABASE_URL: 'https://test.supabase.co',
      VITE_SUPABASE_ANON_KEY: undefined
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    expect(() => validateEnv()).toThrow()
  })
  it('should throw error with placeholder values', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: 'your_reown_project_id_here',
      VITE_SUPABASE_URL: 'your_supabase_url_here',
      VITE_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here'
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    expect(() => validateEnv()).toThrow()
  })
  it('should provide detailed error messages for multiple missing variables', async () => {
    mockProcessEnv({
      VITE_REOWN_PROJECT_ID: undefined,
      VITE_SUPABASE_URL: 'your_supabase_url_here',
      VITE_SUPABASE_ANON_KEY: undefined
    })
    const { validateEnv } = await import('@/utils/validateEnv')
    try {
      validateEnv()
      expect.fail('Expected validateEnv to throw')
    } catch (error) {
      const errorMessage = error.message
      expect(errorMessage).toMatch(/VITE_REOWN_PROJECT_ID is not defined or is empty/)
      expect(errorMessage).toMatch(/VITE_SUPABASE_URL is set to a placeholder value: "your_supabase_url_here"/)
      expect(errorMessage).toMatch(/VITE_SUPABASE_ANON_KEY is not defined or is empty/)
    }
  })
})
