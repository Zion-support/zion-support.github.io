/**
 * Environment Configuration
 * Centralizes all environment variables with validation and type safety
 */

interface EnvConfig {
  // App Configuration
  NODE_ENV: "development" | "production" | "test";
  APP_URL: string;
  APP_NAME: string;

  // Analytics
  GOOGLE_ANALYTICS_ID?: string;

  // API Configuration
  API_BASE_URL: string;
  API_TIMEOUT: number;

  // Feature Flags
  ENABLE_ANALYTICS: boolean;
  ENABLE_ERROR_TRACKING: boolean;
  ENABLE_PERFORMANCE_MONITORING: boolean;

  // Logging
  LOG_LEVEL: "DEBUG" | "INFO" | "WARN" | "ERROR" | "NONE";

  // Build Configuration
  BUILD_ID?: string;
  VERSION?: string;
}

class EnvironmentConfig {
  private static instance: EnvironmentConfig;
  private config: EnvConfig;

  private constructor() {
    this.config = this.loadConfig();
    this.validate();
  }

  public static getInstance(): EnvironmentConfig {
    if (!EnvironmentConfig.instance) {
      EnvironmentConfig.instance = new EnvironmentConfig();
    }
    return EnvironmentConfig.instance;
  }

  private getEnvVar(key: string, defaultValue?: string): string {
    if (typeof process !== "undefined" && process.env) {
      // Check both regular and NEXT_PUBLIC_ prefixed versions
      return (
        process.env[key] ||
        process.env[`NEXT_PUBLIC_${key}`] ||
        defaultValue ||
        ""
      );
    }
    return defaultValue || "";
  }

  private getBooleanEnvVar(
    key: string,
    defaultValue: boolean = false,
  ): boolean {
    const _value = this.getEnvVar(key);
    if (!value) return defaultValue;
    return value.toLowerCase() === "true" || value === "1";
  }

  private getNumberEnvVar(key: string, defaultValue: number): number {
    const _value = this.getEnvVar(key);
    //     const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
  }

  private loadConfig(): EnvConfig {
    return {
      // App Configuration
      NODE_ENV:
        (this.getEnvVar("NODE_ENV", "development") as any) || "development",
      APP_URL: this.getEnvVar("APP_URL", "https://ziontechgroup.com"),
      APP_NAME: this.getEnvVar("APP_NAME", "Zion Tech Group"),

      // Analytics
      GOOGLE_ANALYTICS_ID: this.getEnvVar("GOOGLE_ANALYTICS_ID"),

      // API Configuration
      API_BASE_URL: this.getEnvVar(
        "API_BASE_URL",
        "https://api.ziontechgroup.com",
      ),
      API_TIMEOUT: this.getNumberEnvVar("API_TIMEOUT", 30000),

      // Feature Flags
      ENABLE_ANALYTICS: this.getBooleanEnvVar("ENABLE_ANALYTICS", true),
      ENABLE_ERROR_TRACKING: this.getBooleanEnvVar(
        "ENABLE_ERROR_TRACKING",
        true,
      ),
      ENABLE_PERFORMANCE_MONITORING: this.getBooleanEnvVar(
        "ENABLE_PERFORMANCE_MONITORING",
        true,
      ),

      // Logging
      LOG_LEVEL: (this.getEnvVar("LOG_LEVEL", "INFO") as any) || "INFO",

      // Build Configuration
      BUILD_ID: this.getEnvVar("BUILD_ID"),
      VERSION: this.getEnvVar("VERSION", "1.0.0"),
    };
  }

  private validate(): void {
    const errors: string[] = [];

    // Validate NODE_ENV
    if (!["development", "production", "test"].includes(this.config.NODE_ENV)) {
      errors.push(`Invalid NODE_ENV: ${this.config.NODE_ENV}`);
    }

    // Validate URLs
    if (this.config.APP_URL && !this.isValidUrl(this.config.APP_URL)) {
      errors.push(`Invalid APP_URL: ${this.config.APP_URL}`);
    }

    if (
      this.config.API_BASE_URL &&
      !this.isValidUrl(this.config.API_BASE_URL)
    ) {
      errors.push(`Invalid API_BASE_URL: ${this.config.API_BASE_URL}`);
    }

    // Validate timeout
    if (this.config.API_TIMEOUT < 0) {
      errors.push(`API_TIMEOUT must be positive: ${this.config.API_TIMEOUT}`);
    }

    if (errors.length > 0) {
      //       // In production, we might want to throw, but in development just warn
      if (this.config.NODE_ENV === "production") {
        throw new Error(`Environment validation failed: ${errors.join(", ")}`);
      }
    }
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  public get(): Readonly<EnvConfig> {
    return { ...this.config };
  }

  public isDevelopment(): boolean {
    return this.config.NODE_ENV === "development";
  }

  public isProduction(): boolean {
    return this.config.NODE_ENV === "production";
  }

  public isTest(): boolean {
    return this.config.NODE_ENV === "test";
  }

  // Convenience getters
  public getAppUrl(): string {
    return this.config.APP_URL;
  }

  public getApiBaseUrl(): string {
    return this.config.API_BASE_URL;
  }

  public getGoogleAnalyticsId(): string | undefined {
    return this.config.GOOGLE_ANALYTICS_ID;
  }

  public isAnalyticsEnabled(): boolean {
    return this.config.ENABLE_ANALYTICS && this.isProduction();
  }

  public isErrorTrackingEnabled(): boolean {
    return this.config.ENABLE_ERROR_TRACKING;
  }

  public isPerformanceMonitoringEnabled(): boolean {
    return this.config.ENABLE_PERFORMANCE_MONITORING;
  }
}

// Export singleton instance
export const env = EnvironmentConfig.getInstance();

// Export typed config
export type { EnvConfig };

export default env;
