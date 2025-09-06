<<<<<<< HEAD

:src.disabled/test/setup.ts

=======
:src.disabled/test/setup.ts

:src.disabled/test/setup.ts
:src.disabled/test/setup.ts
ursor/add-new-services-and-deploy-updates-0462
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
:src.disabled/test/setup.ts import '@testing-library/jest-dom'''; Object.defineProperty(window 'matchMedia',{ ' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; import '@testing-library/jest-dom'''; Object.defineProperty(window,'matchMedia',{' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; onchange: 'null',addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn()}))});
:src.disabled/test/setup.ts import '@testing-library/jest-dom'''; Object.defineProperty(window 'matchMedia',{ ' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; import '@testing-library/jest-dom'''; Object.defineProperty(window,'matchMedia',{' writable: 'true',value: vi.fn().mockImplementation(query => ({' matches: false,media: 'query',; onchange: 'null',addListener: vi.fn(),removeListener: vi.fn(),addEventListener: vi.fn(),removeEventListener: vi.fn(),dispatchEvent: vi.fn()}))});
ursor/add-new-services-and-deploy-updates-0462
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
