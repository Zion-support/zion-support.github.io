<<<<<<< HEAD
import React from 'react';
// Learn more: https://github.com/testing-library/jest-dom;
require('@testing-library/jest-dom');
const React="require('react');"
const { TextEncoder, TextDecoder } = require('util');
// Polyfills for Node.js environment;
global.TextEncoder="TextEncoder;"
global.TextDecoder="TextDecoder;"
// Mock files that use import.meta.env;
jest.mock('./src/utils/logger.ts', () => ({}
  logger: {}
=======
import React from 'react;

// Learn more: https://github.com/testing-library/jest-dom
require(@testing-library/jest-dom);

const React = require(react);;

const { TextEncoder, TextDecoder } = require(util);

// Polyfills for Node.js environment
global.TextEncoder = TextEncoder;

global.TextDecoder = TextDecoder;

// Mock files that use import.meta.env
jest.mock('./src/utils/logger.ts, () => ({
  logger: {
>>>>>>> origin/main
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    log: jest.fn()}}));
<<<<<<< HEAD
jest.mock('./src/utils/analytics.ts', () => ({}
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
  initAnalytics: jest.fn()}));
jest.mock('./src/utils/errorTracking.ts', () => ({}
  reportError: jest.fn(),
  initErrorReporting: jest.fn()}));
jest.mock('./src/hooks/usePerformance.ts', () => ({}
  usePerformance: jest.fn(() => ({}
    metrics: {},
    optimize: jest.fn()}))}));
jest.mock('./src/hooks/usePerformanceMonitoring.ts', () => ({}
  usePerformanceMonitoring: jest.fn(() => ({}
=======

jest.mock('./src/utils/analytics.ts, () => ({
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
  initAnalytics: jest.fn()}));

jest.mock('./src/utils/errorTracking.ts, () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn()}));

jest.mock('./src/hooks/usePerformance.ts, () => ({
  usePerformance: jest.fn(() => ({
    metrics: {},
    optimize: jest.fn()}))}));

jest.mock('./src/hooks/usePerformanceMonitoring.ts, () => ({
  usePerformanceMonitoring: jest.fn(() => ({
>>>>>>> origin/main
    metrics: {},
    report: {}}))}));
// Mock React Router (this is a Vite project, not Next.js)
<<<<<<< HEAD
jest.mock('react-router-dom', () => {;
const actual="jest.requireActual('react-router-dom');"
  const React="require('react');"
  return {}
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({}
      pathname: '/',
      search: '',
      hash: '',
      state: null}),
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {}
      return React.createElement('a', { href: to, ...props }, children)},
    NavLink: ({ children, to, ...props }) => {}
      return React.createElement('a', { href: to, ...props }, children)},
=======
jest.mock(react-router-dom, () => {;

const actual = jest.requireActual(react-router-dom);;

  const React = require(react);;

  return {
    ...actual,
    useNavigate: () => jest.fn(),
    useLocation: () => ({
      pathname: '/,
      search: ',
      hash: ',
      state: null}),
    useParams: () => ({}),
    Link: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
    NavLink: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)},
>>>>>>> origin/main
    BrowserRouter: ({ children }) => children,
    MemoryRouter: ({ children }) => {;

const { createMemoryRouter, RouterProvider } = actual;
<<<<<<< HEAD
      const router="createMemoryRouter([]"
        {}
          path: '/',
          element: children}], {}
        initialEntries: ['/'],
=======

      const router = createMemoryRouter([;;

        {
          path: '/,
          element: children}], {
        initialEntries: ['/],
>>>>>>> origin/main
        initialIndex: 0});

      return React.createElement(RouterProvider, { router })},
    RouterProvider: ({ router }) => null}});
<<<<<<< HEAD
// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {}
=======

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia, {
>>>>>>> origin/main
  writable: true,
  value: jest.fn().mockImplementation((query) => ({}
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()}))});
<<<<<<< HEAD
// Mock IntersectionObserver;
global.IntersectionObserver = "class IntersectionObserver {;"
=======

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {;

>>>>>>> origin/main
constructor() {}

  disconnect() {}

  observe() {}
<<<<<<< HEAD
  takeRecords() {}
=======

  takeRecords() {
>>>>>>> origin/main
    return []}

  unobserve() {}

};
// Suppress console errors in tests;
<<<<<<< HEAD
const originalError="console.error;"
beforeAll(() => {}
  console.error = jest.fn((...args) => {}
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {}
=======

const originalError = console.error;;

beforeAll(() => {
  console.error = jest.fn((...args) => {
    if (

      typeof args[0] === 'string &&
      (args[0].includes('Warning: ReactDOM.render) ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit))
    ) {
>>>>>>> origin/main
      return}

    originalError.call(console, ...args)})});
<<<<<<< HEAD
afterAll(() => {}
  console.error="originalError});"
=======

afterAll(() => {
  console.error = originalError});
>>>>>>> origin/main
