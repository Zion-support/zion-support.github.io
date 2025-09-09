// __tests__/utils/validateEnv.test.ts

// NOTE: DO NOT add a static import for checkEssentialEnvVars here.
// It needs to be dynamically imported within each test after mocks are applied.

// Store original process.env
const ORIGINAL_ENV = process.env;

  for (const key of Object.keys(otherEnvValues)) {
    const value = otherEnvValues[key];
    if (value !== undefined) {
      process.env[key] = String(value);
    } else {
      // If undefined in input, set as empty string to override defaults
      // and ensure it's treated as "missing" by the validator.
      process.env[key] = '';
    }
  }

  // Apply DEV last. For Jest, this usually means setting NODE_ENV or a specific mock
  // if the code directly uses import.meta.env.DEV.
  // Assuming babel-plugin-transform-import-meta or ts-jest handles import.meta.env.DEV
  // to read from process.env.DEV or process.env.NODE_ENV.
  if (devToSet) {
    process.env.NODE_ENV = 'development';
    process.env.DEV = 'true';
  } else {
    process.env.NODE_ENV = 'production';
    process.env.DEV = 'false';
  }
  // If direct import.meta manipulation is needed, it's more complex and might require
  // jest.mock for the module using it, or specific babel/ts-jest transformers.
};


describe('checkEssentialEnvVars', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv }; // Restore original process.env
    // Ensure a clean state for process.env related to DEV if needed
    delete process.env.NODE_ENV;
    delete process.env.DEV;
    // Aggressively ensure import.meta.env is reset if it exists from a previous state
    // This part is tricky with Jest as import.meta is ESM specific.
    // Relies on ts-jest or babel correctly handling/transforming import.meta.env
    // and jest.resetModules() clearing any cached transformed values.
    if (globalThis.import && globalThis.import.meta) {
      globalThis.import.meta.env = {}; // This might not be effective in Jest depending on transform
    }
  });

  afterEach(() => {
    process.env = { ...originalEnv }; // Restore original process.env
    jest.restoreAllMocks(); // Restores all spies and original implementations
  });

  it('should not throw an error when all essential environment variables are set correctly', () => {
    mockProcessEnv({
      NODE_ENV: 'development', // checkEssentialEnvVars is for non-production
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    // Dynamically import after mocking
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).not.toThrow();
    });
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is missing', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      // NEXT_PUBLIC_REOWN_PROJECT_ID is missing
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_URL is empty', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: '', // Empty value
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_URL is not defined or is empty/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_SUPABASE_ANON_KEY is a placeholder value', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'your_supabase_anon_key_here', // Placeholder
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_SUPABASE_ANON_KEY is set to a placeholder value: "your_supabase_anon_key_here"/);
    });
  });

  it('should throw an error if NEXT_PUBLIC_REOWN_PROJECT_ID is a placeholder value', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'YOUR_PROJECT_ID', // Placeholder
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    return import('@/utils/validateEnv').then(module => {
      expect(() => module.checkEssentialEnvVars()).toThrowError(/NEXT_PUBLIC_REOWN_PROJECT_ID is set to a placeholder value: "YOUR_PROJECT_ID"/);
    });
  });

  it('should throw an error listing multiple missing or invalid variables', () => {
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: undefined,
      NEXT_PUBLIC_SUPABASE_URL: 'your_supabase_url_here', // Placeholder
      NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined,
    });
    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars();
        // If it doesn't throw, the test should fail
        throw new Error("checkEssentialEnvVars did not throw an error as expected");
      } catch (error: any) {
        const errorMessage = error.message;
        expect(errorMessage).toMatch(/NEXT_PUBLIC_REOWN_PROJECT_ID is not defined or is empty/);
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_URL is set to a placeholder value: "your_supabase_url_here"/);
        expect(errorMessage).toMatch(/NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined or is empty/);
      }
    });
  });

  it('should log success message in DEV mode when variables are valid', () => {
    // The checkEssentialEnvVars function checks import.meta.env.DEV
    // This is harder to mock reliably with Jest's process.env focus.
    // For now, we'll assume if it doesn't throw, and NODE_ENV is 'development', it implies success.
    // A more robust test would involve deeper Jest mocking of ES modules if this were critical.
    mockProcessEnv({
      NODE_ENV: 'development',
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock to prevent actual logging
    return import('@/utils/validateEnv').then(module => {
      module.checkEssentialEnvVars();
      expect(consoleLogSpy).toHaveBeenCalledWith('Essential environment variables validated successfully.');
      // consoleLogSpy.mockRestore(); // Done in afterEach
    });
  });

  it('should not log success message when not in DEV mode even if variables are valid', () => {
    mockProcessEnv({
      NODE_ENV: 'production', // Not DEV mode
      NEXT_PUBLIC_REOWN_PROJECT_ID: 'valid_project_id',
      NEXT_PUBLIC_SUPABASE_URL: 'https://valid.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'valid_supabase_key',
    });

    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // Ensure spy is clean before the specific call we want to monitor
    // consoleLogSpy.mockClear(); // jest.restoreAllMocks in afterEach handles this

    return import('@/utils/validateEnv').then(module => {
      try {
        module.checkEssentialEnvVars();
        expect(consoleLogSpy).not.toHaveBeenCalledWith('Essential environment variables validated successfully.');
      } finally {
        // consoleLogSpy.mockRestore(); // Done in afterEach
      }
    });
  });
});
