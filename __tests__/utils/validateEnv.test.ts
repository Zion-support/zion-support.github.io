import { describe, it, expect, beforeEach, afterEach, vi } from '@jest/globals'

// Store original process.env
const ORIGINAL_ENV = process.env

// Helper to set and reset process.env for Vitest tests
const mockProcessEnv = (envValues: Record<string, string | boolean | undefined>) => {
  for (const key in envValues) {
    if (envValues[key] !== undefined) {
      process.env[key] = String(envValues[key])
    } else {
      delete process.env[key]
    }
  }
}

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env = ORIGINAL_ENV
  })

