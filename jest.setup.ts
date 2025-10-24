import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';

// Mock environment variables
process.env['VITE_REOWN_PROJECT_ID'] = 'test_project_id_from_jest_setup';
process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'http://localhost:54321';
process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'test_anon_key';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(URL, 'revokeObjectURL', {
    writable: true,
    value: jest.fn(),
  });
}

// Mock window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
  });
}

// Mock IntersectionObserver
if (typeof window.IntersectionObserver === 'undefined') {
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    })),
  });
}

// Mock performance.getEntriesByType
if (typeof performance.getEntriesByType !== 'function') {
  Object.defineProperty(performance, 'getEntriesByType', {
    writable: true,
    value: jest.fn().mockReturnValue([]),
  });
}

// Mock TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
