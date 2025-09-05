// Jest setup file
import '@testing-library/jest-dom',
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
<<<<<<< HEAD
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn()
      },
      isFallback: false
    }
  }
})),

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
=======
      events: {_on: jest.fn(), _off: jest.fn(), _emit: jest.fn(), },
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock(_'next/image', _() => ({__esModule: true, _default: props => {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
})),

// Mock Next.js Link component
<<<<<<< HEAD
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }) => {
    return <a href={href} {...props}>{children}</a>
  }
})),

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
    dispatchEvent: jest.fn()
  }))
}),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {_constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
},

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {_constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
},

// Global test setup
<<<<<<< HEAD
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks()
}),
=======
beforeEach__(() => {_// Reset all mocks before each test
  jest.clearAllMocks();});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
