/**
 * Jest setup file for testing environment
 */

>>>>>>> main
=======
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
import '@testing-library/jest-dom';
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
global.IntersectionObserver = class MockIntersectionObserver {
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
>>>>>>> main
>>>>>>> main
>>>>>>> main
  root: Element | null = null;
  rootMargin: string = '0px';
  thresholds: ReadonlyArray<number> = [0];
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
  takeRecords() { return []; }
} as any;
  rootMargin: string = '';
  thresholds: ReadonlyArray<number> = Object.freeze([]);
  
  constructor() {}
  disconnect(): void {}
  observe(): void {}
  unobserve(): void {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
} as unknown as typeof IntersectionObserver;

=======
  takeRecords() { return []; }
} as unknown as typeof IntersectionObserver;
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});
// Mock console methods to reduce noise in tests
const originalError = console.error;
const originalWarn = console.warn;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('componentWillReceiveProps') ||
       args[0].includes('componentWillMount'))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});
afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    getEntriesByType: jest.fn(() => []),
    mark: jest.fn(),
    measure: jest.fn(),
  },
});

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback: FrameRequestCallback) => {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = (id: number) => {
  clearTimeout(id);
};
  disconnect(): void {}
  observe(): void {}
  unobserve(): void {}
} as unknown as typeof ResizeObserver;
>>>>>>> main
=======
>>>>>>> ad3f5667eee57a9969ff433042f2200dd6375572
