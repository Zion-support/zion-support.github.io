<<<<<<< HEAD

import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()

  vi.restoreAllMocks()
})
=======
import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup(),;
  vi.restoreAllMocks();
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
