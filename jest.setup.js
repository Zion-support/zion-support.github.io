<<<<<<< HEAD
<<<<<<< HEAD
// Jest setup file;
import '@testing-library/jest-dom';
;
// Mock Next.js router;
jest.mock('next/router', () => ({;
  useRouter() {;
    return {;
      route:'/',;
      pathname:'/',;
      query:{},;
      asPath:'/',;
      push:jest.fn(),;
      pop:jest.fn(),;
      reload:jest.fn(),;
      back:jest.fn(),;
      prefetch:jest.fn().mockResolvedValue(undefined),;
      beforePopState:jest.fn(),;
      events:{;
        on:jest.fn(),;
        off:jest.fn(),;
        emit:jest.fn(),;
      },;
      isFallback:false,;
    };
  },;
}));
;
// Mock Next.js Image component;
jest.mock('next/image', () => ({;
  __esModule:true,;
  default:(props) => {;
    // eslint-disable-next-line @next/next/no-img-element;
    return <img {...props} />;
  },;
}));
;
// Mock Next.js Link component;
jest.mock('next/link', () => ({;
  __esModule:true,;
  default:({ children, href, ...props }) => {;
    return <a href={href} {...props}>{children}</a>;
  },;
}));
;
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {;
  writable:true,;
  value:jest.fn().mockImplementation(query => ({;
    matches:false,;
    media:query,;
    onchange:null,;
    addListener:jest.fn(), // deprecated;
    removeListener:jest.fn(), // deprecated;
    addEventListener:jest.fn(),;
    removeEventListener:jest.fn(),;
    dispatchEvent:jest.fn(),;
  })),;
});
;
// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {;
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
;
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver {;
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
;
// Global test setup;
beforeEach(() => {;
  // Reset all mocks before each test;
  jest.clearAllMocks();
});
=======
// Jest setup file,
import '@testing-library/jest-dom',
// Mock Next.js router,
jest.mock(_'next/router', _() => ({useRouter() {
    return {
      route: '/', pathname: '/', query: {},
=======
// Jest setup file
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
<<<<<<< HEAD
      isFallback: false
    }
  }
})),

// Mock Next.js Image component,
jest.mock('next/image', () => ({
  _esModule: true,
  default: (props) => {    // eslint-disable-next-line @next/next/no-img-element,
return <img {...props} />
  }
})),

// Mock Next.js Link component,
=======
      isFallback: false,
    };
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
jest.mock('next/link', () => ({
  _esModule: true,
  default: ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

// Mock window.matchMedia,
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated,
removeListener: jest.fn(), // deprecated,
addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
<<<<<<< HEAD
    dispatchEvent: jest.fn()
  }))
}),
// Mock IntersectionObserver,
global.IntersectionObserver = class IntersectionObserver {constructor() {}
=======
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
// Mock ResizeObserver,
global.ResizeObserver = class ResizeObserver {constructor() {}
=======
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
  disconnect() {}
  observe() {}
  unobserve() {}
};

<<<<<<< HEAD
// Global test setup,
beforeEach(() => {
  // Reset all mocks before each test,
jest.clearAllMocks()
}),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
});
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
