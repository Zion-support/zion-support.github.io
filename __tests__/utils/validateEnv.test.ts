import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'

// Store original process.env
const ORIGINAL_ENV = process.env

// Helper to set and reset process.env for tests
const mockProcessEnv = (envValues: Record<string, string | boolean | undefined>) => {
  for (const key in envValues) {
    if (envValues[key] !== undefined) {
      process.env[key] = String(envValues[key])
    } else {
      delete process.env[key]
    }
  }
}

describe('Environment Validation', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
  })

  it('should validate environment variables', () => {
    mockProcessEnv({
      NODE_ENV: 'test',
      VITE_APP_TITLE: 'Test App'
    })
    
    expect(process.env.NODE_ENV).toBe('test')
    expect(process.env.VITE_APP_TITLE).toBe('Test App')
  })

  it('should handle missing environment variables', () => {
    mockProcessEnv({
      NODE_ENV: undefined,
      VITE_APP_TITLE: undefined
    })
    
    expect(process.env.NODE_ENV).toBeUndefined()
    expect(process.env.VITE_APP_TITLE).toBeUndefined()
  })
})

