<<<<<<< HEAD
import '@testing-library/jest-dom';
import { afterEach, vi  } from 'vitest';
import { cleanup } from '@testing-library/react';
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup();
=======
import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  vi.restoreAllMocks()
})