import { advancedErrorRecovery } from '../../utils/advancedErrorRecovery';

// Mock fetch
global.fetch = jest.fn();

describe('Advanced Error Recovery System', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset any internal state if needed
    advancedErrorRecovery.reset();
    // Configure for testing with minimal delays
    advancedErrorRecovery.configure({
      retryDelay: 0,
      enableCircuitBreaker: false,
      maxRetries: 2
    });
  });

  describe('Error Recovery Strategies', () => {
    it('should handle network errors with retry', async () => {
      const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      mockFetch
        .mockRejectedValueOnce(new Error('Network error'))
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValueOnce('Success');

      const result = await advancedErrorRecovery.executeWithRecovery(
        () => fetch('/api/test'),
        'network'
      );

      expect(result).toBeDefined();
      expect(mockFetch).toHaveBeenCalledTimes(3);
    });

    it('should handle component errors with fallback', async () => {
      const fallbackComponent = () => 'Fallback content';
      const errorComponent = () => {
        throw new Error('Component error');
      };

      const result = await advancedErrorRecovery.executeWithRecovery(
        errorComponent,
        'component',
        { fallbackComponent }
      );

      expect(result).toBe('Fallback content');
    });

    it('should handle data errors with cache fallback', async () => {
      const cacheData = { cached: 'data' };
      advancedErrorRecovery.setCacheData('test-key', cacheData);

      const errorFunction = () => {
        throw new Error('Data error');
      };

      const result = await advancedErrorRecovery.executeWithRecovery(
        errorFunction,
        'data',
        { cacheKey: 'test-key' }
      );

      expect(result).toEqual(cacheData);
    });
  });

  describe('Circuit Breaker', () => {
    it('should open circuit after failure threshold', async () => {
      const failingFunction = () => {
        throw new Error('Always fails');
      };

      // Execute multiple times to trigger circuit breaker
      for (let i = 0; i < 5; i++) {
        try {
          await advancedErrorRecovery.executeWithRecovery(
            failingFunction,
            'network'
          );
        } catch {
          // Expected to fail
        }
      }

      const stats = advancedErrorRecovery.getStats();
      expect(stats.circuitBreakerOpen).toBe(true);
    });

    it('should close circuit after recovery time', async () => {
      jest.useFakeTimers();

      const failingFunction = () => {
        throw new Error('Always fails');
      };

      // Trigger circuit breaker
      for (let i = 0; i < 5; i++) {
        try {
          await advancedErrorRecovery.executeWithRecovery(
            failingFunction,
            'network'
          );
        } catch {
          // Expected to fail
        }
      }

      // Fast forward time past recovery period
      jest.advanceTimersByTime(60000); // 1 minute

      const stats = advancedErrorRecovery.getStats();
      expect(stats.circuitBreakerOpen).toBe(false);

      jest.useRealTimers();
    });
  });

  describe('Retry Mechanisms', () => {
    it('should retry with exponential backoff', async () => {
      const mockFunction = jest.fn()
        .mockRejectedValueOnce(new Error('Error 1'))
        .mockRejectedValueOnce(new Error('Error 2'))
        .mockResolvedValueOnce('Success');

      const result = await advancedErrorRecovery.executeWithRecovery(
        mockFunction,
        'network',
        { maxRetries: 3 }
      );

      expect(result).toBe('Success');
      expect(mockFunction).toHaveBeenCalledTimes(3);
    });

    it('should respect max retry limit', async () => {
      const mockFunction = jest.fn().mockRejectedValue(new Error('Always fails'));

      await expect(
        advancedErrorRecovery.executeWithRecovery(
          mockFunction,
          'network',
          { maxRetries: 2 }
        )
      ).rejects.toThrow('Always fails');

      expect(mockFunction).toHaveBeenCalledTimes(3); // Initial + 2 retries
    });
  });

  describe('User Guidance', () => {
    it('should provide user guidance for errors', async () => {
      const guidance = await advancedErrorRecovery.getUserGuidance(
        new Error('Network error'),
        'network'
      );

      expect(guidance).toContain('Network');
      expect(guidance).toContain('connection');
    });

    it('should provide different guidance for different error types', async () => {
      const networkGuidance = await advancedErrorRecovery.getUserGuidance(
        new Error('Network error'),
        'network'
      );

      const componentGuidance = await advancedErrorRecovery.getUserGuidance(
        new Error('Component error'),
        'component'
      );

      expect(networkGuidance).not.toBe(componentGuidance);
    });
  });

  describe('Statistics and Monitoring', () => {
    it('should track recovery statistics', async () => {
      const mockFunction = jest.fn()
        .mockRejectedValueOnce(new Error('Error'))
        .mockResolvedValueOnce('Success');

      await advancedErrorRecovery.executeWithRecovery(
        mockFunction,
        'network'
      );

      const stats = advancedErrorRecovery.getStats();
      expect(stats.totalErrors).toBe(1);
      expect(stats.successfulRecoveries).toBe(1);
      expect(stats.recoveryRate).toBe(1);
    });

    it('should track different error types', async () => {
      await advancedErrorRecovery.executeWithRecovery(
        () => { throw new Error('Network error'); },
        'network'
      );

      await advancedErrorRecovery.executeWithRecovery(
        () => { throw new Error('Component error'); },
        'component'
      );

      const stats = advancedErrorRecovery.getStats();
      expect(stats.errorTypes.network).toBe(1);
      expect(stats.errorTypes.component).toBe(1);
    });
  });
});