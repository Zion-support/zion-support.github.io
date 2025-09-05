<<<<<<< HEAD
import '@testing-library/jest-dom',
import { afterEach, vi } from 'vitest',
import { cleanup } from '@testing-library/react',
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup(),
  vi.restoreAllMocks()
}),
=======
import '@testing-library/jest-dom';

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach__(() => {_cleanup();
  vi.restoreAllMocks();});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
