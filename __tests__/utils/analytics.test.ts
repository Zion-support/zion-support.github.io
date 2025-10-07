// Mock gtag function
const mockGtag = jest.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

// Mock console methods
const mockConsole = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

Object.defineProperty(console, 'log', { value: mockConsole.log });
Object.defineProperty(console, 'error', { value: mockConsole.error });
Object.defineProperty(console, 'warn', { value: mockConsole.warn });

describe('Analytics Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset window.gtag
    (window as any).gtag = mockGtag;
  });

  test('analytics instance is created', () => {
    const { analytics } = require('../../app/utils/analytics');
    expect(analytics).toBeDefined();
    expect(typeof analytics.track).toBe('function');
  });

  test('track method calls gtag with correct parameters', () => {
    const { analytics } = require('../../app/utils/analytics');
    
    analytics.track({
      event: 'test_event',
      category: 'test',
      label: 'test_label',
      value: 100
    });
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'test_event', {
      event_category: 'test',
      event_label: 'test_label',
      value: 100
    });
  });

  test('track method handles missing gtag gracefully', () => {
    // Remove gtag from window
    delete (window as any).gtag;
    
    const { analytics } = require('../../app/utils/analytics');
    
    // Should not throw error
    expect(() => {
      analytics.track({
        event: 'test_event',
        category: 'test'
      });
    }).not.toThrow();
  });

  test('trackPageView calls gtag with page_view event', () => {
    const { analytics } = require('../../app/utils/analytics');
    
    analytics.trackPageView('/test-page', 'Test Page');
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
      event_category: 'Navigation',
      event_label: '/test-page',
      value: undefined
    });
  });

  test('trackError calls gtag with error event', () => {
    const { analytics } = require('../../app/utils/analytics');
    
    analytics.trackError('Test error message', 'javascript');
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'error_occurred', {
      event_category: 'Error',
      event_label: 'Test error message_javascript',
      value: undefined
    });
  });

  test('trackPerformance calls gtag with timing event', () => {
    const { analytics } = require('../../app/utils/analytics');
    
    analytics.trackPerformance('page_load', 1500);
    
    expect(mockGtag).toHaveBeenCalledWith('event', 'performance_metric', {
      event_category: 'Performance',
      event_label: 'page_load',
      value: 1500
    });
  });
});