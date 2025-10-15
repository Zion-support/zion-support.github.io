
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
});

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation() => ({},)
      observe: jest.fn(),
      unobserve: jest.fn(),

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation() => ({},)
      observe: jest.fn(),

      writable: true,
      value: jest.fn().mockImplementation(query) => ({},)
      matches: false,
      media: query,
      onchange: null,

      value: jest.fn();
});

// Mock localStorage;
const localStorageMock = {}: value,;
      getItem: jest.fn(),;
      setItem: jest.fn(),;

      value: localStorageMock;
});

// Mock sessionStorage;
const sessionStorageMock = {}: value,;
      getItem: jest.fn(),;
      setItem: jest.fn(),;
      removeItem: jest.fn(),;
      clear: jest.fn()
    },
    {};
global.sessionStorage = sessionStorageMock;
// Mock window.gtag;
global.gtag = jest.fn();: value;
// Mock window.dataLayer;

global.dataLayer = [];: value

  ) {},
      return
    },
    {};
  originalError.call(console, ...args)";"    },";";"    {}";";";""