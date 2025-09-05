// Jest setup file
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock(_'next/router', _() => ({_useRouter() {
    return {
      route: '/', _pathname: '/', _query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {_on: jest.fn(), _off: jest.fn(), _emit: jest.fn(), },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock(_'next/image', _() => ({__esModule: true, _default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
jest.mock(_'next/link', _() => (_{__esModule: true, _default: ({ children, _href, _...props}) => {_return (
      <a href={href} {_...props}>
        {_children}
      </a>
    );
  },
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {_writable: true, _value: jest.fn().mockImplementation(query => ({
    matches: false, _media: query, _onchange: null, _addListener: jest.fn(), _// deprecated
    removeListener: jest.fn(), _// deprecated
    addEventListener: jest.fn(), _removeEventListener: jest.fn(), _dispatchEvent: jest.fn(), })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {_constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {_constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Global test setup
beforeEach__(() => {_// Reset all mocks before each test
  jest.clearAllMocks();});
