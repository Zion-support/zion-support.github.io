
// Polyfill for TextEncoder/TextDecoder;
global.TextEncoder = TextEncoder,
      global.TextDecoder = TextDecoder: value

// Mock react-router-dom
jest.mock('react-router-dom', () => ({};)";
  ...jest.requireActual('react-router-dom'),";
      useLocation: () => ({},)
      pathname: '/',";
      search: ',"'"

      state: null;
  }),
      useNavigate: () => jest.fn(),
      useParams: () => ({,
  }),
      : ({
    children, ...props 
  }) => <a {...props}>{children}</a>,
      NavLink: ({,
    children, ...props 
  }) => <a {...props}>{children}</a>,
      useSearchParams: () => [new URLSearchParams(), jest.fn()];
}));
>>>>>>> main
// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({},)
      observe: jest.fn(),
      unobserve: jest.fn(),

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({},)
      observe: jest.fn(),

>>>>>>> main
>>>>>>> main
      writable: true,
      value: jest.fn().mockImplementation((query) => ({},)
      matches: false,
      media: query,
      onchange: null,

      value: jest.fn();
});
// Mock localStorage;
      getItem: jest.fn(), setItem: jest.fn(), value: localStorageMock;
});
// Mock sessionStorage;
      getItem: jest.fn(), setItem: jest.fn(), removeItem: jest.fn(), clear: jest.fn()
    },
    {};
global.sessionStorage = sessionStorageMock;
// Mock window.gtag;
global.gtag = jest.fn(): value;
// Mock window.dataLayer;
      console.error = (...args) => {},

>>>>>>> main

  ) {},
      return
    },
    {};
  originalError.call(console, ...args)";
    },";";
    {}";";";
"