<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
<<<<<<< HEAD:src.disabled/test/setup.ts
=======
:src.disabled/test/setup.ts
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
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
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
