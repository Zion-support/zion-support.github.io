require('@testing-library/jest-dom');

//Mock window.matchMedia used by some components
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

//Mock IntersectionObserver and ResizeObserver
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

class MockResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

//@ts-ignore
global.IntersectionObserver = MockIntersectionObserver;
//@ts-ignore
global.ResizeObserver = MockResizeObserver;

beforeEach(() => {
  jest.clearAllMocks();
});

//Polyfill TextEncoder/TextDecoder for react-router in Jest (Node environment)
try {
  const { TextEncoder, TextDecoder } = require('util');
  //@ts-ignore
  if (typeof global.TextEncoder === 'undefined') {
    //@ts-ignore
    global.TextEncoder = TextEncoder;
  }
  //@ts-ignore
  if (typeof global.TextDecoder === 'undefined') {
    //@ts-ignore
    global.TextDecoder = TextDecoder;
  }
} catch (_) {
  // ignore if util not available
}
