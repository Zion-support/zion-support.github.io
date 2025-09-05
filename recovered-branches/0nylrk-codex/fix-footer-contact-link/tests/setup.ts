<<<<<<< HEAD
import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
;
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup(),;
  vi.restoreAllMocks(),;
}),;
=======
import '@testing-library/jest-dom',
import { afterEach, vi } from 'vitest',
import { cleanup } from '@testing-library/react',
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup(),
  vi.restoreAllMocks()
}),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
