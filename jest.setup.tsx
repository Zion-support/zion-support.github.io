<<<<<<< HEAD
<<<<<<< HEAD
import '@testing-library/jest-dom',;';';";"
      import { TextEncoder, TextDecoder }; from 'util';";"

// Polyfill for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder: value,
      global.TextDecoder = TextDecoder;: value

// Mock react-router-dom
jest.mock('react-router-dom', () => ({};)"
  ...jest.requireActual('react-router-dom'),"
      useLocation: () => ({},)
      pathname: '/',"
      search: '',"
      hash: '',"
      state: null
  }),
      useNavigate: () => jest.fn(),
      useParams: () => ({}),
      : ({ children, ...props }) => <a {...props}>{children}</a>,
      NavLink: ({ children, ...props }) => <a {...props}>{children}</a>,
      useSearchParams: () => [new URLSearchParams(), jest.fn()]
}))
=======
<<<<<<< HEAD
import '@testing-library/jest-dom',;';';";";";";";"
      import { TextEncoder, TextDecoder }; from 'util';";";";";";

// Polyfill for TextEncoder/TextDecoder;";
global.TextEncoder = TextEncoder: value,";";
      global.TextDecoder = TextDecoder;: value";";";
// Mock react-router-dom"
jest.mock('react-router-dom', () => ({};)";"
  ...jest.requireActual('react-router-dom'),";";";";
      useLocation: () => ({},)"
      pathname: '/',";"
      search: '',";"
      hash: '',";
=======
import '@testing-library/jest-dom',;';';";";";";";";";
      import { TextEncoder, TextDecoder }; from 'util';";";";";";";";
=======
import '@testing-library/jest-dom','""";
      import { TextEncoder, TextDecoder }; from 'util'"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
;
// Polyfill for TextEncoder/TextDecoder;
global.TextEncoder = TextEncoder,
      global.TextDecoder = TextDecoder: value

// Mock react-router-dom
jest.mock('react-router-dom', () => ({};)";
  ...jest.requireActual('react-router-dom'),";
      useLocation: () => ({},)
      pathname: '/',";
      search: ',"'"

<<<<<<< HEAD
      hash: '',";";";
>>>>>>> main
=======
      hash: ',"'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
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
<<<<<<< HEAD
      disconnect: jest.fn()
}))
=======
      disconnect: jest.fn();
}));
>>>>>>> main
// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({},)
      observe: jest.fn(),
<<<<<<< HEAD
      unobserve: jest.fn(),";
      disconnect: jest.fn();";";
}));";";";
// Mock window.matchMedia"
Object.defineProperty(window, "matchMedia", {},)";
=======
      unobserve: jest.fn(),
      disconnect: jest.fn()
}))
// Mock window.matchMedia
<<<<<<< HEAD
<<<<<<< HEAD
Object.defineProperty(window, "matchMedia", {},)"
=======
Object.defineProperty(window, "matchMedia", {},)";";
=======
Object.defineProperty(window, "matchMedia", {},)";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

>>>>>>> main
>>>>>>> main
      writable: true,
      value: jest.fn().mockImplementation((query) => ({},)
      matches: false,
      media: query,
      onchange: null,
<<<<<<< HEAD
      addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
  }))
})
// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {},)"
      value: jest.fn()
})

// Mock localStorage
const  localStorageMock = {}: value,
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    },
    {}
Object.defineProperty(window, 'localStorage', {},)"
      value: localStorageMock
})

// Mock sessionStorage
const  sessionStorageMock = {}: value,
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn()
    },
    {}
global.sessionStorage = sessionStorageMock
// Mock window.gtag
global.gtag = jest.fn();: value
// Mock window.dataLayer
=======
      addListener: jest.fn(), // deprecated;
    removeListener: jest.fn(), // deprecated;
    addEventListener: jest.fn(),;
      removeEventListener: jest.fn(),;
<<<<<<< HEAD
      dispatchEvent: jest.fn();";
  }));";";
});";";";
// Mock window.scrollTo"
Object.defineProperty(window, 'scrollTo', {},)";
=======
      dispatchEvent: jest.fn();
  }));
});

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {},)";

>>>>>>> main
      value: jest.fn();
});

// Mock localStorage;
<<<<<<< HEAD
const localStorageMock = {}: value,;
=======
const localStorageMock  = {}: value,;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      getItem: jest.fn(),;
      setItem: jest.fn(),;
<<<<<<< HEAD
      removeItem: jest.fn(),;";
      clear: jest.fn()";";
    },";";";
    {}"
Object.defineProperty(window, 'localStorage', {},)";
=======
      removeItem: jest.fn(),;
      clear: jest.fn()
    },
    {}
Object.defineProperty(window, 'localStorage', {},)";

>>>>>>> main
      value: localStorageMock;
});

// Mock sessionStorage;
<<<<<<< HEAD
const sessionStorageMock = {}: value,;
=======
const sessionStorageMock  = {}: value,;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      getItem: jest.fn(),;
      setItem: jest.fn(),;
      removeItem: jest.fn(),;
      clear: jest.fn()
    },
    {};
global.sessionStorage = sessionStorageMock;
// Mock window.gtag;
global.gtag = jest.fn(): value;
// Mock window.dataLayer;
<<<<<<< HEAD
>>>>>>> main
global.dataLayer = [];: value
<<<<<<< HEAD
// Suppress console.error for specific React warnings";
const originalError = console.error,";";
      console.error = (...args) => {},";";";
      if ();"
    typeof args[0] === 'string' &&";"
    args[0].includes('Warning: ReactDOM.render is no longer supported')";
=======

// Suppress console.error for specific React warnings
const  originalError = console.error,
=======
global.dataLayer = []: value

// Suppress console.error for specific React warnings
const originalError  = console.error,
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      console.error = (...args) => {},
<<<<<<< HEAD
      if ()
    typeof args[0] === 'string' &&"
    args[0].includes('Warning: ReactDOM.render is no longer supported')"
=======
      if ();
    typeof args[0] === 'string' &&";

<<<<<<< HEAD
    args[0].includes('Warning: ReactDOM.render is no longer supported')";";";
>>>>>>> main
>>>>>>> main
=======
    args[0].includes('Warning: ReactDOM.render is no longer supported')";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  ) {},
      return
    },
    {};
  originalError.call(console, ...args)";
    },";";
    {}";";";
"