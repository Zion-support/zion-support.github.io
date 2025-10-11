import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Store original process.env
const ORIGINAL_ENV = process.env;

// Helper to set and reset process.env for Vitest tests
const setEnv = (env: Record<string, string | undefined>) => {
  Object.keys(env).forEach(key => {
    if (env[key] === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = env[key];
    }
  });
};

const resetEnv = () => {
  process.env = { ...ORIGINAL_ENV };
};

describe('validateEnv', () => {
  beforeEach(() => {
    vi.resetModules();
    resetEnv();
  });

  afterEach(() => {
    resetEnv();
  });

  it('should pass with valid environment variables', async () => {
    setEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_anon_key',
      DEV: 'true',
    });

    const { checkEssentialEnvVars } = await import('../../app/utils/validateEnv');
    expect(() => checkEssentialEnvVars()).not.toThrow();
  });

  it('should throw error for missing VITE_REOWN_PROJECT_ID', async () => {
    setEnv({
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      VITE_SUPABASE_ANON_KEY: 'valid_anon_key',
      DEV: 'true',
    });

    const { checkEssentialEnvVars } = await import('../../app/utils/validateEnv');
    expect(() => checkEssentialEnvVars()).toThrow();
  });

  it('should throw error for placeholder VITE_SUPABASE_URL', async () => {
    setEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'your_supabase_url_here',
      VITE_SUPABASE_ANON_KEY: 'valid_anon_key',
      DEV: 'true',
    });

    const { checkEssentialEnvVars } = await import('../../app/utils/validateEnv');
    expect(() => checkEssentialEnvVars()).toThrow();
  });

  it('should throw error for missing VITE_SUPABASE_ANON_KEY', async () => {
    setEnv({
      VITE_REOWN_PROJECT_ID: 'valid_project_id',
      VITE_SUPABASE_URL: 'https://valid.supabase.co',
      DEV: 'true',
    });

    const { checkEssentialEnvVars } = await import('../../app/utils/validateEnv');
    expect(() => checkEssentialEnvVars()).toThrow();
  });
});