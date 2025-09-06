import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
<<<<<<< HEAD
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup(),
  vi.restoreAllMocks()
}),
=======
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup(),;
  vi.restoreAllMocks();
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
