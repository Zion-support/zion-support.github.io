import { advancedCacheSystem } from '../../utils/advancedCacheSystem';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

describe('Advanced Cache System', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    advancedCacheSystem.clear();
  });

  describe('Basic Operations', () => {
    it('should set and get values', async () => {
      const key = 'test-key';
      const value = { data: 'test data' };

      await advancedCacheSystem.set(key, value);
      const result = await advancedCacheSystem.get(key);

      expect(result).toEqual(value);
    });

    it('should return null for non-existent keys', async () => {
      const result = await advancedCacheSystem.get('non-existent');
      expect(result).toBeNull();
    });

    it('should delete values', async () => {
      const key = 'test-key';
      const value = { data: 'test data' };

      await advancedCacheSystem.set(key, value);
      await advancedCacheSystem.delete(key);
      const result = await advancedCacheSystem.get(key);

      expect(result).toBeNull();
    });

    it('should check if key exists', async () => {
      const key = 'test-key';
      const value = { data: 'test data' };

      expect(await advancedCacheSystem.has(key)).toBe(false);
      
      await advancedCacheSystem.set(key, value);
      expect(await advancedCacheSystem.has(key)).toBe(true);
    });
  });

  describe('TTL (Time To Live)', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should expire values after TTL', async () => {
      const key = 'test-key';
      const value = { data: 'test data' };
      const ttl = 1000; // 1 second

      await advancedCacheSystem.set(key, value, ttl);
      
      // Value should exist before TTL expires
      expect(await advancedCacheSystem.get(key)).toEqual(value);
      
      // Fast forward time past TTL
      jest.advanceTimersByTime(1001);
      
      // Value should be expired
      expect(await advancedCacheSystem.get(key)).toBeNull();
    });

    it('should not expire values without TTL', async () => {
      const key = 'test-key';
      const value = { data: 'test data' };

      await advancedCacheSystem.set(key, value);
      
      // Fast forward time
      jest.advanceTimersByTime(10000);
      
      // Value should still exist
      expect(await advancedCacheSystem.get(key)).toEqual(value);
    });
  });

  describe('Compression', () => {
    it('should compress large values', async () => {
      const key = 'large-data';
      const value = { data: 'x'.repeat(1000) }; // Large string

      await advancedCacheSystem.set(key, value, undefined, true);
      const result = await advancedCacheSystem.get(key);

      expect(result).toEqual(value);
    });
  });

  describe('Pattern Operations', () => {
    it('should delete by pattern', async () => {
      await advancedCacheSystem.set('user:1', { id: 1 });
      await advancedCacheSystem.set('user:2', { id: 2 });
      await advancedCacheSystem.set('post:1', { id: 1 });

      await advancedCacheSystem.deletePattern('user:*');

      expect(await advancedCacheSystem.get('user:1')).toBeNull();
      expect(await advancedCacheSystem.get('user:2')).toBeNull();
      expect(await advancedCacheSystem.get('post:1')).toEqual({ id: 1 });
    });
  });

  describe('Statistics', () => {
    it('should track cache statistics', async () => {
      await advancedCacheSystem.set('key1', 'value1');
      await advancedCacheSystem.set('key2', 'value2');
      await advancedCacheSystem.get('key1');
      await advancedCacheSystem.get('key2');
      await advancedCacheSystem.get('key1');

      const stats = advancedCacheSystem.getStats();

      expect(stats.hits).toBe(3);
      expect(stats.misses).toBe(0);
      expect(stats.size).toBe(2);
    });
  });

  describe('Memory Management', () => {
    it('should evict items when memory limit is reached', async () => {
      // Set a small memory limit
      advancedCacheSystem.setMemoryLimit(100);

      // Add items that exceed the limit
      await advancedCacheSystem.set('key1', 'x'.repeat(50));
      await advancedCacheSystem.set('key2', 'x'.repeat(50));
      await advancedCacheSystem.set('key3', 'x'.repeat(50));

      // Some items should be evicted
      const stats = advancedCacheSystem.getStats();
      expect(stats.size).toBeLessThanOrEqual(2);
    });
  });
});