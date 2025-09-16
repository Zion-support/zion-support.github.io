<<<<<<< HEAD
// Basic Jest setup
import @testing-library/jest-dom';

// Mock environment variables
process.env.NEXT_PUBLIC_SUPABASE_URL = https://test.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = test-key';

=======
<<<<<<< HEAD
import '@testing-library/jest-dom';// Polyfill for TextEncoder/TextDecoder;
const { TextEncoder, TextDecoder } = require('util')global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;// Mock Next.js router;
jest.mock('next/router', () => ({useRouter() {return {route: '/',pathname: '/',query: {},asPath: '/',push: jest.fn(),pop: jest.fn(),reload: jest.fn(),back: jest.fn(),prefetch: jest.fn().mockResolvedValue(undefined),beforePopState: jest.fn(),events: {on: jest.fn(),off: jest.fn(),emit: jest.fn()},isFallback: false;
    }}
}))// Mock Next.js Image component;
jest.mock('next/image', () => ({__esModule: true,default: (props) => {return <img {...props} />;
  }
}))// Mock Next.js Link component;
jest.mock('next/link', () => ({__esModule: true,default: ({ children, href, ...props }) => {return <a href={href} {...props}>{children}</a>;
  }
}))// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {writable: true,value: jest.fn().mockImplementation(query => ({matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn()}))})// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {constructor() {}
require('@testing-library/jest-dom');
>>>>>>> origin/merge-pr-12271
// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: /',
      pathname: /',
      query: {},
      asPath: /',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()
      },
      isFallback: false
    };
  }
}));

<<<<<<< HEAD
// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  }
}));
=======
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}// Global test setup;
beforeEach(() => {jest.clearAllMocks()})
};
// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    "media": query,
    "onchange": null,
    "addListener": jest.fn(), // deprecated
    "removeListener": jest.fn(), // deprecated
    "addEventListener": jest.fn(),
    "removeEventListener": jest.fn(),
    "dispatchEvent": jest.fn()}))});
import '@testing-library/jest-dom'; global.IntersectionObserver = class IntersectionObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; global.ResizeObserver = class ResizeObserver { constructor() {} disconnect() {} observe() {} unobserve() {} }; Object.defineProperty(window,'matchMedia',{ writable: true,value: jest.fn().mockImplementation(query => ({ matches: false,media: query,onchange: null,addListener: jest.fn(),removeListener: jest.fn(),addEventListener: jest.fn(),removeEventListener: jest.fn(),dispatchEvent: jest.fn()}))});
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import '@testing-library/jest-dom'
>>>>>>> origin/merge-pr-12271
