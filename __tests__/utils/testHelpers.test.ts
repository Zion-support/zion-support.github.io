import {
  mockFetch,
  mockLocalStorage,
  mockIntersectionObserver,
  mockResizeObserver,
  mockMatchMedia,
  setupPerformanceMocks,
} from '../../src/utils/testHelpers';

describe('Test Helpers', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('mockFetch', () => {
    it('should mock fetch with successful response', async () => {
      const testData = { message: 'success' };
      mockFetch(testData);

      const response = await global.fetch('https://api.example.com/data');
      expect(response.ok).toBe(true);
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual(testData);
    });

    it('should mock fetch with error response', async () => {
      const testData = { error: 'failed' };
      mockFetch(testData, false, 500);

      const response = await global.fetch('https://api.example.com/data');
      expect(response.ok).toBe(false);
      expect(response.status).toBe(500);
      expect(await response.json()).toEqual(testData);
    });

    it('should have bytes method on response', async () => {
      const testData = { data: 'test' };
      mockFetch(testData);

      const response = await global.fetch('https://api.example.com/data');
      expect(response.bytes).toBeDefined();
      expect(typeof response.bytes).toBe('function');
      
      const bytes = await response.bytes();
      expect(bytes).toBeInstanceOf(Uint8Array);
    });

    it('should support text response', async () => {
      const testData = { message: 'hello' };
      mockFetch(testData);

      const response = await global.fetch('https://api.example.com/data');
      const text = await response.text();
      expect(text).toBe(JSON.stringify(testData));
    });

    it('should support blob response', async () => {
      const testData = { binary: 'data' };
      mockFetch(testData);

      const response = await global.fetch('https://api.example.com/data');
      const blob = await response.blob();
      expect(blob).toBeInstanceOf(Blob);
    });
  });

  describe('mockLocalStorage', () => {
    beforeEach(() => {
      mockLocalStorage();
    });

    it('should store and retrieve items', () => {
      localStorage.setItem('key', 'value');
      expect(localStorage.getItem('key')).toBe('value');
    });

    it('should remove items', () => {
      localStorage.setItem('key', 'value');
      localStorage.removeItem('key');
      expect(localStorage.getItem('key')).toBeNull();
    });

    it('should clear all items', () => {
      localStorage.setItem('key1', 'value1');
      localStorage.setItem('key2', 'value2');
      localStorage.clear();
      expect(localStorage.getItem('key1')).toBeNull();
      expect(localStorage.getItem('key2')).toBeNull();
    });

    it('should return correct length', () => {
      expect(localStorage.length).toBe(0);
      localStorage.setItem('key', 'value');
      expect(localStorage.length).toBe(1);
    });

    it('should support key method', () => {
      localStorage.setItem('first', 'value1');
      localStorage.setItem('second', 'value2');
      expect(localStorage.key(0)).toBe('first');
      expect(localStorage.key(1)).toBe('second');
      expect(localStorage.key(2)).toBeNull();
    });
  });

  describe('mockIntersectionObserver', () => {
    beforeEach(() => {
      mockIntersectionObserver();
    });

    it('should create IntersectionObserver instance', () => {
      const callback = jest.fn();
      const observer = new IntersectionObserver(callback);
      expect(observer).toBeDefined();
      expect(observer.observe).toBeDefined();
      expect(observer.unobserve).toBeDefined();
      expect(observer.disconnect).toBeDefined();
    });

    it('should track observed elements', () => {
      const callback = jest.fn();
      const observer = new IntersectionObserver(callback);
      const element = document.createElement('div');

      observer.observe(element);
      expect(observer.observe).toHaveBeenCalledWith(element);
    });

    it('should support disconnect', () => {
      const callback = jest.fn();
      const observer = new IntersectionObserver(callback);

      observer.disconnect();
      expect(observer.disconnect).toHaveBeenCalled();
    });
  });

  describe('mockResizeObserver', () => {
    beforeEach(() => {
      mockResizeObserver();
    });

    it('should create ResizeObserver instance', () => {
      const callback = jest.fn();
      const observer = new ResizeObserver(callback);
      expect(observer).toBeDefined();
      expect(observer.observe).toBeDefined();
      expect(observer.unobserve).toBeDefined();
      expect(observer.disconnect).toBeDefined();
    });

    it('should track observed elements', () => {
      const callback = jest.fn();
      const observer = new ResizeObserver(callback);
      const element = document.createElement('div');

      observer.observe(element);
      expect(observer.observe).toHaveBeenCalledWith(element);
    });
  });

  describe('mockMatchMedia', () => {
    beforeEach(() => {
      mockMatchMedia();
    });

    it('should return media query list', () => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      expect(mediaQuery).toBeDefined();
      expect(mediaQuery.matches).toBe(false);
      expect(mediaQuery.media).toBe('(min-width: 768px)');
    });

    it('should support event listeners', () => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      const listener = jest.fn();

      mediaQuery.addListener(listener);
      mediaQuery.removeListener(listener);
      expect(mediaQuery.addListener).toHaveBeenCalledWith(listener);
      expect(mediaQuery.removeListener).toHaveBeenCalledWith(listener);
    });

    it('should support addEventListener and removeEventListener', () => {
      const mediaQuery = window.matchMedia('(min-width: 768px)');
      const listener = jest.fn();

      mediaQuery.addEventListener('change', listener);
      mediaQuery.removeEventListener('change', listener);
      expect(mediaQuery.addEventListener).toHaveBeenCalledWith('change', listener);
      expect(mediaQuery.removeEventListener).toHaveBeenCalledWith('change', listener);
    });
  });

  describe('setupPerformanceMocks', () => {
    beforeEach(() => {
      setupPerformanceMocks();
    });

    it('should mock performance.now', () => {
      const now = performance.now();
      expect(typeof now).toBe('number');
      expect(now).toBeGreaterThanOrEqual(0);
    });

    it('should mock performance.mark', () => {
      performance.mark('test-mark');
      expect(performance.mark).toHaveBeenCalledWith('test-mark');
    });

    it('should mock performance.measure', () => {
      performance.measure('test-measure', 'start', 'end');
      expect(performance.measure).toHaveBeenCalledWith('test-measure', 'start', 'end');
    });

    it('should mock performance.getEntriesByName', () => {
      const entries = performance.getEntriesByName('test');
      expect(Array.isArray(entries)).toBe(true);
      expect(entries).toHaveLength(0);
    });

    it('should mock performance.getEntriesByType', () => {
      const entries = performance.getEntriesByType('mark');
      expect(Array.isArray(entries)).toBe(true);
    });
  });
});
