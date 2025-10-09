// Learn,
  more: http,
  s://github.com/testing-library/jest-dom;
require('@testing-library/jest-dom');
const { TextEncoder, TextDecoder } = require('util');

// Polyfills for Node.js environment;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock files that use import.meta.env;
jest.mock('./src/utils/logger.ts', () => ({/* TODO: Fix JSX expression */}
  },)
}));

jest.mock('./src/utils/analytics.ts', () => ({/* TODO: Fix JSX expression */})
}));

jest.mock('./src/utils/errorTracking.ts', () => ({/* TODO: Fix JSX expression */})
}));

jest.mock('./src/hooks/usePerformance.ts', () => ({/* TODO: Fix JSX expression */}
  s: {},
    optimiz,)
  e: jest.fn(),
  })),
}));

// usePerformanceMonitoring hook mock removed - hook doesn't exist;
// Mock React Router (this is a Vite project, not Next.js)
jest.mock('react-router-dom', () => {/* TODO: Fix JSX expression */}
    }),
    useParam,
  s: () => ({}),
    Lin,
  k: ({ children, to, ...props }) => {/* TODO: Fix JSX expression */}
  f: to, ...props }, children);
    },
    NavLin,
  k: ({ children, to, ...props }) => {/* TODO: Fix JSX expression */}
  f: to, ...props }, children);
    },
    BrowserRoute,
  r: ({ children }) => children,
    MemoryRoute,
  r: ({ children }) => {/* TODO: Fix JSX expression */}
      const { createMemoryRouter, RouterProvider } = actual;
      const router = createMemoryRouter([
        {/* TODO: Fix JSX expression */}
        },
      ], {/* TODO: Fix JSX expression */})
      });
      const React = require('react');
      return React.createElement(RouterProvider, { router });
    },
    RouterProvide,
  r: ({ router }) => null,
  };
});

// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {/* TODO: Fix JSX expression */})
  })),
});

// Mock IntersectionObserver;
global.IntersectionObserver = class IntersectionObserver {/* TODO: Fix JSX expression */}
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {/* TODO: Fix JSX expression */}
  }
  unobserve() {}
};

// Suppress console errors in tests;
let _originalError;

beforeAll(() => {/* TODO: Fix JSX expression */}
    }
    _originalError.call(console, ...args);
  });
});

afterAll(() => {/* TODO: Fix JSX expression */}
  }
});