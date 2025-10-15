import '@testing-library/jest-dom';
import React from 'react';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  const mockReact = jest.requireActual('react');
  return {
    ...actual,
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    }),
    useNavigate: () => jest.fn(),
    Link: ({ to, children, ...props }) => mockReact.createElement('a', { href: to, ...props }, children),
    NavLink: ({ to, children, ...props }) => mockReact.createElement('a', { href: to, ...props }, children),
    BrowserRouter: ({ children }) => mockReact.createElement('div', { 'data-testid': 'browser-router' }, children),
    MemoryRouter: ({ children }) => mockReact.createElement('div', { 'data-testid': 'memory-router' }, children)
  };
});

// Suppress console warnings
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
      return;
    }
    originalError.call(console, ...args);
  };});

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;