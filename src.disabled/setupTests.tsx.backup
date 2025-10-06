import '@testing-library/jest-dom';

//Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
  media: query,
    onchange: null,
    addListener: jest.fn(), //deprecated
    removeListener: jest.fn(), //deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

//Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '0px';
  thresholds: ReadonlyArray<number> = [0];
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() { return []; }
<<<<<<< HEAD:src/setupTests.tsx
=======
<<<<<<< HEAD:src/setupTests.tsx
=======
<<<<<<< HEAD:src/setupTests.tsx
=======
<<<<<<< HEAD:src/setupTests.tsx
>>>>>>> main:src.disabled/setupTests.tsx
>>>>>>> main:src.disabled/setupTests.tsx
>>>>>>> main:src.disabled/setupTests.tsx
};
=======
} as typeof IntersectionObserver;
>>>>>>> main:src.disabled/setupTests.tsx

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
