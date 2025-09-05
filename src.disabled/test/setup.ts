<<<<<<< HEAD
<<<<<<< HEAD:src.disabled/test/setup.ts
=======
:src.disabled/test/setup.ts
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
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

<<<<<<< HEAD:src.disabled/test/setup.ts import '@testing-library/jest-dom'''; Object.defineProperty(window 'matchMedia',{ ' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; import '@testing-library/jest-dom'''; Object.defineProperty(window,'matchMedia',{' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; onchange: 'null',addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn()}))});
=======
:src.disabled/test/setup.ts import '@testing-library/jest-dom'''; Object.defineProperty(window 'matchMedia',{ ' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; import '@testing-library/jest-dom'''; Object.defineProperty(window,'matchMedia',{' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; onchange: 'null',addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn()}))});
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
