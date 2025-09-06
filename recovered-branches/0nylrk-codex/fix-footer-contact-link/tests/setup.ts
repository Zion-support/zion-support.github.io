
import '@testing - library / jest - dom',
import { after_each, vi } from 'vitest',
import { cleanup } from '@testing - library / react',
// Ensure React Testing Library cleans up and mocks are restored between tests;
after_each (() => {
  cleanup (),
  vi.restoreAllMocks ();
}),

=======

import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
