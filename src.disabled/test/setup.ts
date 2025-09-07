:src.disabled/test/setup.ts

:src.disabled/test/setup.ts

:src.disabled/test/setup.ts

:src.disabled/test/setup.ts
:src.disabled/test/setup.ts
ursor/add-new-services-and-deploy-updates-0462

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
// Placeholder content - file was empty after conflict resolution
// Placeholder content - file was empty after conflict resolution
// Placeholder content - file was empty after conflict resolution
