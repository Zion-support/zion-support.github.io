import '@testing-library/jest-dom';
import React from 'react';

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
    Link: ({ to, children, ...props }) => {
      const mockReact = jest.requireActual('react');
      return mockReact.createElement('a', { href: to, ...props }, children);
    },
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => children,
    Routes: ({ children }) => children,
    Route: ({ element }) => element,
    useParams: () => ({}),
    useSearchParams: () => [new URLSearchParams(), jest.fn()],
    createBrowserRouter: () => {
      const mockReact = jest.requireActual('react');
      return {
        path: '/',
        element: mockReact.createElement('div')
      };
    }
  };
});
;
// Mock IntersectionObserver;
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock ResizeObserver;
global.ResizeObserver = class ResizeObserver{;
// Mock ResizeObserver}
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
// Mock window.gtag;
global.gtag = jest.fn();
// Mock window.dataLayer;
global.dataLayer = [];
// Mock window.gtag});
;
// Mock window.dataLayer});"
";'"
require("@testing-library/jest-dom")
//Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require("util")
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
//Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {)
writable: "true")
value: "jest.fn().mockImplementation(query => ({)
matches: false",media: "query",onchange: "null")
addListener: "jest.fn()",//deprecated
removeListener: "jest.fn()",//deprecated
addEventListener: "jest.fn()",removeEventListener: "jest.fn()",dispatchEvent: "jest.fn()"}))

})
//Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver{
//Mock window.matchMedia}
})
//Mock IntersectionObserver
  constructor() {}

afterAll(() => {
  console.error = originalError;
});
