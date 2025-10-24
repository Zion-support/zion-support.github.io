/**
 * Jest setup file for testing environment
 */

import '@testing-library/jest-dom';


// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;


// Suppress jsdom navigation warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args[0]?.toString?.() || args[0]?.message || '';

  if (message.includes('Not implemented: navigation') || 
      message.includes('navigation (except hash changes)')) {
    return;
  }
  originalConsoleError(...args);
};

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (global as any).jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: (global as any).jest.fn(), // deprecated
    removeListener: (global as any).jest.fn(), // deprecated
    addEventListener: (global as any).jest.fn(),
    removeEventListener: (global as any).jest.fn(),
    dispatchEvent: (global as any).jest.fn()
  }))
});

// Mock requestAnimationFrame


// Mock localStorage
const localStorageMock = {
  getItem: (global as any).jest.fn(),
  setItem: (global as any).jest.fn(),
  removeItem: (global as any).jest.fn(),
  clear: (global as any).jest.fn()
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock

// Mock sessionStorage
const sessionStorageMock = {
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock

// Mock fetch
(global as any).fetch = (global as any).jest.fn();


  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),



global.fetch = jest.fn();



// Mock console methods for cleaner test output
const originalConsoleWarn = console.warn;
const originalConsoleInfo = console.info;



console.warn = (...args) => {

  const message = args[0]?.toString?.() || '';
  if (message.includes('Warning: ReactDOM.render is no longer supported')) {



console.info = (...args) => {

  if (message.includes('Download the React DevTools')) {
  originalConsoleInfo(...args);



// Mock PerformanceObserver
global.PerformanceObserver = class MockPerformanceObserver {
  static readonly supportedEntryTypes: readonly string[] = ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'];

  observe() {}
  disconnect() {}
  takeRecords() {
    return [];




// Mock window.location
delete (window as unknown as Record<string, unknown>).location;
(window as unknown as Record<string, unknown>).location = {
  href: 'http://localhost:3000',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/',
  search: '',
  hash: '',
  reload: (global as any).jest.fn(),
  assign: (global as any).jest.fn(),
  replace: (global as any).jest.fn()

