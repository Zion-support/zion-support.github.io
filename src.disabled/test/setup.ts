<<<<<<< HEAD
=======
:src.disabled/test/setup.ts
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
:src.disabled/test/setup.ts import '@testing-library/jest-dom'''; Object.defineProperty(window 'matchMedia',{ ' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; import '@testing-library/jest-dom'''; Object.defineProperty(window,'matchMedia',{' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; onchange: 'null',addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn()}))});
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
