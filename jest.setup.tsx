// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
  }),
}));

// Suppress ReactDOM.render warnings
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (args[0].includes('Warning: ReactDOM.render is no longer supported')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});