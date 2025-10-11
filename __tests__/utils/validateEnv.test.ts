import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Store original process.env
const ORIGINAL_ENV = process.env;

// Helper to set and reset process.env for Vitest tests
const setEnv = (env: Record<string, string>) => {
  process.env = { ...ORIGINAL_ENV, ...env };
};

const resetEnv = () => {
  process.env = ORIGINAL_ENV;
};

describe('validateEnv', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    resetEnv();
  });

  it('should validate required environment variables', async () => {
    setEnv({
      NODE_ENV: 'test',
      DATABASE_URL: 'postgresql://test:test@localhost:5432/test',
      NEXTAUTH_SECRET: 'test-secret',
      NEXTAUTH_URL: 'http://localhost:3000',
    });

    // Dynamically import the function after setting env vars
    const { validateEnv } = await import('@/utils/validateEnv');
    
    expect(() => validateEnv()).not.toThrow();
  });

  it('should throw error for missing required environment variables', async () => {
    setEnv({
      NODE_ENV: 'test',
      // Missing DATABASE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL
    });

    // Dynamically import the function after setting env vars
    const { validateEnv } = await import('@/utils/validateEnv');
    
    expect(() => validateEnv()).toThrow();
  });
});