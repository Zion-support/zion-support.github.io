require('@testing-library/jest-dom');
<<<<<<< HEAD
import React from 'react;

jest.mock(react-router-dom, () => {;

const actual = jest.requireActual(react-router-dom);;

  const React = require(react);;

      pathname: '/,
      search: ',
      hash: ',
      state: null}),
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
    NavLink: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => {;

const { createMemoryRouter, RouterProvider } = actual;

      const router = createMemoryRouter([;;

        {
          path: '/,
          element: children}], {
        initialEntries: ['/],
        initialIndex: 0});

      return React.createElement(RouterProvider, { router })},
    RouterProvider: ({ router }) => null}});
global.IntersectionObserver = class IntersectionObserver {;

constructor() {}

    return []}

// Suppress console errors in tests;

const originalError = console.error;;

      return}

    originalError.call(console, ...args)})});

afterAll(() => {
  console.error = originalError});
=======

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suppress console errors in tests
const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {
      return;
    }
    originalError.call(console, ...args);
  });
});

afterAll(() => {
  console.error = originalError;
});
>>>>>>> origin/main
