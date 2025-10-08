/**
 * Jest setup file for testing environment
 */

import '@testing-library/jest-dom';

// Suppress console warnings during tests
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;
const originalConsoleInfo = console.info;

console.warn = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleWarn(...args);
};

console.error = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleError(...args);
};

console.info = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (message.includes('ReactDOM.render is no longer supported')) {
    return;
  }
  originalConsoleInfo(...args);
};
