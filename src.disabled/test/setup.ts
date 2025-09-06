
=======
:src.disabled/test/setup.ts

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import
  '@testing-library/jest-dom''';// Mock window.matchMedia
Object.defineProperty(window
  'matchMedia', {
  '  writable: true, value: vi.fn().mockImplementation(query => ({'    matches: false, media: query,
import '@testing-library/jest-dom''';// Mock window.matchMedia;
Object.defineProperty(window, 'matchMedia', {'  writable: true, value: vi.fn().mockImplementation(query => ({'    matches: false, media: query,
    onchange: null, addListener: vi.fn(), // deprecated,
  removeListener: vi.fn(), // deprecated,
  addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn()}))});

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
