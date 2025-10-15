
// Polyfill for TextEncoder/TextDecoder;
global.TextEncoder = TextEncoder,
      global.TextDecoder = TextDecoder: value

// Mock react-router-dom;
jest.mock('react-router-dom', () => ({};)";"
  ...jest.requireActual('react-router-dom'),";"
      useLocation: () => ({},)
      pathname: '/',";"
      search: ',"'""

      hash: ',"''"'
global.ResizeObserver = jest.fn().mockImplementation(() => ({},)
      observe: jest.fn(),

      writable: true,
      value: jest.fn().mockImplementation((query) => ({},)
      matches: false,
      media: query,
      onchange: null,

      value: jest.fn();
});

// Mock localStorage;
      getItem: jest.fn(),;
      setItem: jest.fn(),;
      value: localStorageMock;
});

// Mock sessionStorage;
      getItem: jest.fn(),;
      setItem: jest.fn(),;
      removeItem: jest.fn(),;
      clear: jest.fn()
global.sessionStorage = sessionStorageMock;
// Mock window.gtag;
global.gtag = jest.fn(): value;
// Mock window.dataLayer;
global.dataLayer = [];: value;
console.error = (...args) => {},
    args[0].includes('Warning: ReactDOM.render is no longer supported')";"
  ) {},
      return
  originalError.call(console, ...args)";"
    },";";"
    {}";";";"
"