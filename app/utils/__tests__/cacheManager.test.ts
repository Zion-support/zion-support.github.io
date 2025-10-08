import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import {
  CacheManager,
  CacheStorage,
} from '../cacheManager';

describe('cacheManager', () => {
  let cache: CacheManager;

  beforeEach(() => {
    cache = new CacheManager({
      storage: CacheStorage.Memory,
      defaultTTL: 1000,
    });
    cache.clear();
  });

  describe('basic operations', () => {
    it('should set and get values', () => {
      cache.set('key1', 'value1');
      expect(cache.get('key1')).toBe('value1');
    });

    it('should return undefined for non-existent keys', () => {
      expect(cache.get('non-existent')).toBeUndefined();
    });

    it('should check if key exists', () => {
      cache.set('key1', 'value1');
      expect(cache.has('key1')).toBe(true);
      expect(cache.has('key2')).toBe(false);
    });

    it('should delete keys', () => {
      cache.set('key1', 'value1');
      expect(cache.has('key1')).toBe(true);
      
      cache.delete('key1');
      expect(cache.has('key1')).toBe(false);
    });

    it('should clear all cache', () => {
      cache.set('key1', 'value1');
      cache.set('key2', 'value2');
      cache.set('key3', 'value3');
      
      cache.clear();
      
      expect(cache.has('key1')).toBe(false);
      expect(cache.has('key2')).toBe(false);
      expect(cache.has('key3')).toBe(false);
    });
  });

  describe('TTL (Time To Live)', () => {
    it('should respect TTL', async () => {
      cache.set('key1', 'value1', { ttl: 100 });
      expect(cache.get('key1')).toBe('value1');
      
      // Wait for TTL to expire
      await new Promise(resolve => setTimeout(resolve, 150));
      
      expect(cache.get('key1')).toBeUndefined();
    });

    it('should use default TTL when not specified', async () => {
      const shortCache = new CacheManager({
        storage: CacheStorage.Memory,
        defaultTTL: 100,
      });
      
      shortCache.set('key1', 'value1');
      expect(shortCache.get('key1')).toBe('value1');
      
      await new Promise(resolve => setTimeout(resolve, 150));
      
      expect(shortCache.get('key1')).toBeUndefined();
    });

    it('should allow infinite TTL', async () => {
      cache.set('key1', 'value1', { ttl: Infinity });
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      expect(cache.get('key1')).toBe('value1');
    });
  });

  describe('getOrSet', () => {
    it('should get existing value', () => {
      cache.set('key1', 'cached-value');
      
      const factory = jest.fn(() => 'new-value');
      const value = cache.getOrSet('key1', factory);
      
      expect(value).toBe('cached-value');
      expect(factory).not.toHaveBeenCalled();
    });

    it('should set value if not exists', () => {
      const factory = jest.fn(() => 'new-value');
      const value = cache.getOrSet('key1', factory);
      
      expect(value).toBe('new-value');
      expect(factory).toHaveBeenCalledTimes(1);
      expect(cache.get('key1')).toBe('new-value');
    });

    it('should support async factory functions', async () => {
      const asyncFactory = jest.fn(async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return 'async-value';
      });
      
      const value = await cache.getOrSet('key1', asyncFactory);
      
      expect(value).toBe('async-value');
      expect(asyncFactory).toHaveBeenCalledTimes(1);
    });
  });

  describe('memoize', () => {
    it('should memoize function results', () => {
      const expensiveFn = jest.fn((x: number, y: number) => x + y);
      const memoized = cache.memoize(expensiveFn);
      
      const result1 = memoized(2, 3);
      const result2 = memoized(2, 3);
      const result3 = memoized(2, 3);
      
      expect(result1).toBe(5);
      expect(result2).toBe(5);
      expect(result3).toBe(5);
      expect(expensiveFn).toHaveBeenCalledTimes(1);
    });

    it('should memoize different arguments separately', () => {
      const expensiveFn = jest.fn((x: number, y: number) => x + y);
      const memoized = cache.memoize(expensiveFn);
      
      memoized(2, 3);
      memoized(4, 5);
      memoized(2, 3);
      
      expect(expensiveFn).toHaveBeenCalledTimes(2);
    });

    it('should memoize async functions', async () => {
      const asyncFn = jest.fn(async (x: number) => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return x * 2;
      });
      
      const memoized = cache.memoize(asyncFn);
      
      const result1 = await memoized(5);
      const result2 = await memoized(5);
      
      expect(result1).toBe(10);
      expect(result2).toBe(10);
      expect(asyncFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('statistics', () => {
    it('should track hit rate', () => {
      cache.set('key1', 'value1');
      
      cache.get('key1'); // Hit
      cache.get('key2'); // Miss
      cache.get('key1'); // Hit
      cache.get('key3'); // Miss
      
      const stats = cache.getStatistics();
      expect(stats.hits).toBe(2);
      expect(stats.misses).toBe(2);
      expect(stats.hitRate).toBe(0.5);
    });

    it('should track entry count', () => {
      cache.set('key1', 'value1');
      cache.set('key2', 'value2');
      cache.set('key3', 'value3');
      
      const stats = cache.getStatistics();
      expect(stats.entries).toBe(3);
    });

    it('should calculate hit rate correctly', () => {
      cache.set('key1', 'value1');
      
      for (let i = 0; i < 90; i++) {
        cache.get('key1'); // 90 hits
      }
      
      for (let i = 0; i < 10; i++) {
        cache.get('non-existent'); // 10 misses
      }
      
      const stats = cache.getStatistics();
      expect(stats.hitRate).toBe(0.9);
    });

    it('should return 0 hit rate when no requests', () => {
      const stats = cache.getStatistics();
      expect(stats.hitRate).toBe(0);
    });
  });

  describe('storage types', () => {
    it('should support memory storage', () => {
      const memCache = new CacheManager({ storage: CacheStorage.Memory });
      memCache.set('key1', 'value1');
      expect(memCache.get('key1')).toBe('value1');
    });

    it('should support localStorage', () => {
      if (typeof localStorage !== 'undefined') {
        const localCache = new CacheManager({ storage: CacheStorage.Local });
        localCache.set('key1', 'value1');
        expect(localCache.get('key1')).toBe('value1');
        localCache.clear();
      }
    });

    it('should support sessionStorage', () => {
      if (typeof sessionStorage !== 'undefined') {
        const sessionCache = new CacheManager({ storage: CacheStorage.Session });
        sessionCache.set('key1', 'value1');
        expect(sessionCache.get('key1')).toBe('value1');
        sessionCache.clear();
      }
    });
  });

  describe('complex data types', () => {
    it('should cache objects', () => {
      const obj = { name: 'test', value: 123 };
      cache.set('obj', obj);
      expect(cache.get('obj')).toEqual(obj);
    });

    it('should cache arrays', () => {
      const arr = [1, 2, 3, 4, 5];
      cache.set('arr', arr);
      expect(cache.get('arr')).toEqual(arr);
    });

    it('should cache nested structures', () => {
      const nested = {
        user: {
          name: 'John',
          roles: ['admin', 'user'],
          settings: {
            theme: 'dark',
            notifications: true,
          },
        },
      };
      
      cache.set('nested', nested);
      expect(cache.get('nested')).toEqual(nested);
    });
  });

  describe('cleanup', () => {
    it('should automatically cleanup expired entries', async () => {
      cache.set('key1', 'value1', { ttl: 50 });
      cache.set('key2', 'value2', { ttl: 200 });
      
      expect(cache.has('key1')).toBe(true);
      expect(cache.has('key2')).toBe(true);
      
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Trigger cleanup by accessing cache
      cache.get('key1');
      
      expect(cache.has('key1')).toBe(false);
      expect(cache.has('key2')).toBe(true);
    });
  });
});
