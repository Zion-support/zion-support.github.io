import { describe, it, expect, beforeEach } from '@jest/globals';
import {
  validateEnv,
  getEnvConfig,
  isDevelopment,
  isProduction,
  isTest,
} from '../envValidator';

describe('envValidator', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset environment
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('validateEnv', () => {
    it('should validate successfully with minimal config', () => {
      process.env.NODE_ENV = 'development';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(true);
      expect(result.errors.length).toBe(0);
    });

    it('should detect invalid NODE_ENV', () => {
      process.env.NODE_ENV = 'invalid';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('NODE_ENV'))).toBe(true);
    });

    it('should validate API_URL format', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_URL = 'invalid-url';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('API_URL'))).toBe(true);
    });

    it('should accept valid API_URL', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_URL = 'https://api.example.com';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(true);
      expect(result.config.API_URL).toBe('https://api.example.com');
    });

    it('should validate API_TIMEOUT is a number', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_TIMEOUT = 'not-a-number';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('API_TIMEOUT'))).toBe(true);
    });

    it('should parse boolean environment variables', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_ENABLE_ANALYTICS = 'true';
      process.env.VITE_ENABLE_ERROR_REPORTING = 'false';
      
      const result = validateEnv();
      
      expect(result.config.ENABLE_ANALYTICS).toBe(true);
      expect(result.config.ENABLE_ERROR_REPORTING).toBe(false);
    });

    it('should validate SENTRY_DSN format', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_SENTRY_DSN = 'http://invalid';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('SENTRY_DSN'))).toBe(true);
    });

    it('should accept valid SENTRY_DSN', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_SENTRY_DSN = 'https://abc123@sentry.io/123456';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(true);
      expect(result.config.SENTRY_DSN).toBe('https://abc123@sentry.io/123456');
    });

    it('should validate LOG_LEVEL', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_LOG_LEVEL = 'invalid';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
      expect(result.errors.some(e => e.includes('LOG_LEVEL'))).toBe(true);
    });

    it('should accept valid LOG_LEVEL', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_LOG_LEVEL = 'debug';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(true);
      expect(result.config.LOG_LEVEL).toBe('debug');
    });

    it('should validate cache configuration', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_MAX_CACHE_SIZE = '100';
      process.env.VITE_CACHE_TTL = '60000';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(true);
      expect(result.config.MAX_CACHE_SIZE).toBe(100);
      expect(result.config.CACHE_TTL).toBe(60000);
    });

    it('should produce warnings for production without analytics', () => {
      process.env.NODE_ENV = 'production';
      process.env.VITE_ENABLE_ANALYTICS = 'true';
      
      const result = validateEnv();
      
      expect(result.warnings.some(w => w.includes('GA_TRACKING_ID'))).toBe(true);
    });

    it('should produce warnings for production without error reporting DSN', () => {
      process.env.NODE_ENV = 'production';
      process.env.VITE_ENABLE_ERROR_REPORTING = 'true';
      
      const result = validateEnv();
      
      expect(result.warnings.some(w => w.includes('SENTRY_DSN'))).toBe(true);
    });
  });

  describe('getEnvConfig', () => {
    it('should return config with defaults', () => {
      process.env.NODE_ENV = 'development';
      
      const config = getEnvConfig();
      
      expect(config.NODE_ENV).toBe('development');
      expect(config.API_TIMEOUT).toBe(30000);
      expect(config.ENABLE_ANALYTICS).toBe(false);
      expect(config.ENABLE_ERROR_REPORTING).toBe(false);
      expect(config.LOG_LEVEL).toBe('info');
      expect(config.MAX_CACHE_SIZE).toBe(100);
      expect(config.CACHE_TTL).toBe(300000);
    });

    it('should merge environment variables with defaults', () => {
      process.env.NODE_ENV = 'production';
      process.env.VITE_API_URL = 'https://api.example.com';
      process.env.VITE_ENABLE_ANALYTICS = 'true';
      process.env.VITE_LOG_LEVEL = 'error';
      
      const config = getEnvConfig();
      
      expect(config.NODE_ENV).toBe('production');
      expect(config.API_URL).toBe('https://api.example.com');
      expect(config.ENABLE_ANALYTICS).toBe(true);
      expect(config.LOG_LEVEL).toBe('error');
    });
  });

  describe('environment helpers', () => {
    it('should detect development environment', () => {
      process.env.NODE_ENV = 'development';
      expect(isDevelopment()).toBe(true);
      expect(isProduction()).toBe(false);
      expect(isTest()).toBe(false);
    });

    it('should detect production environment', () => {
      process.env.NODE_ENV = 'production';
      expect(isDevelopment()).toBe(false);
      expect(isProduction()).toBe(true);
      expect(isTest()).toBe(false);
    });

    it('should detect test environment', () => {
      process.env.NODE_ENV = 'test';
      expect(isDevelopment()).toBe(false);
      expect(isProduction()).toBe(false);
      expect(isTest()).toBe(true);
    });
  });

  describe('edge cases', () => {
    it('should handle missing environment variables', () => {
      delete process.env.NODE_ENV;
      
      const config = getEnvConfig();
      
      expect(config.NODE_ENV).toBe('development'); // Default
    });

    it('should handle negative numbers', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_TIMEOUT = '-1000';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
    });

    it('should handle zero values', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_TIMEOUT = '0';
      
      const result = validateEnv();
      
      expect(result.isValid).toBe(false);
    });

    it('should handle whitespace in values', () => {
      process.env.NODE_ENV = 'development';
      process.env.VITE_API_URL = '  https://api.example.com  ';
      
      const result = validateEnv();
      
      // URL constructor should handle whitespace
      expect(result.isValid).toBe(true);
    });
  });
});
