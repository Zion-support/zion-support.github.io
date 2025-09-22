// Secure environment variable management
export class EnvManager {
  constructor() {
    this.requiredVars = [
      'NODE_ENV',
      'NEXT_PUBLIC_SUPABASE_URL',
      'NEXT_PUBLIC_SUPABASE_ANON_KEY'
    ];
    
    this.optionalVars = [
      'NEXT_PUBLIC_GOOGLE_ANALYTICS_ID',
      'NEXT_PUBLIC_APP_URL',
      'NEXT_PUBLIC_APP_NAME'
    ];
  }

  // Validate environment variables
  validateEnv() {
    const missing = [];
    const warnings = [];

    // Check required variables
    this.requiredVars.forEach(varName => {
      if (!process.env[varName]) {
        missing.push(varName);
      }
    });

    // Check optional variables
    this.optionalVars.forEach(varName => {
      if (!process.env[varName]) {
        warnings.push(varName);
      }
    });

    return {
      isValid: missing.length === 0,
      missing,
      warnings
    };
  }

  // Get environment variable safely
  getEnvVar(name, defaultValue = null) {
    if (typeof window !== 'undefined') {
      // Client-side: only expose public variables
      if (name.startsWith('NEXT_PUBLIC_')) {
        return process.env[name] || defaultValue;
      }
      return defaultValue;
    } else {
      // Server-side: can access all variables
      return process.env[name] || defaultValue;
    }
  }

  // Check if running in production
  isProduction() {
    return this.getEnvVar('NODE_ENV') === 'production';
  }

  // Check if running in development
  isDevelopment() {
    return this.getEnvVar('NODE_ENV') === 'development';
  }

  // Get app configuration
  getAppConfig() {
    return {
      env: this.getEnvVar('NODE_ENV', 'development'),
      appUrl: this.getEnvVar('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
      appName: this.getEnvVar('NEXT_PUBLIC_APP_NAME', 'Zion App'),
      supabaseUrl: this.getEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
      supabaseAnonKey: this.getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
      googleAnalyticsId: this.getEnvVar('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'),
      isProduction: this.isProduction(),
      isDevelopment: this.isDevelopment()
    };
  }

  // Validate Supabase configuration
  validateSupabase() {
    const url = this.getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
    const key = this.getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');

    if (!url || !key) {
      return {
        isValid: false,
        error: 'Missing Supabase configuration'
      };
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      return {
        isValid: false,
        error: 'Invalid Supabase URL'
      };
    }

    return {
      isValid: true,
      url,
      key: key.substring(0, 10) + '...' // Mask the key for logging
    };
  }
}

// Create singleton instance
export const envManager = new EnvManager();

// Export default
export default envManager;