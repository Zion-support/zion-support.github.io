
<<<<<<< HEAD
import '@testing - library / jest - dom',
import { after_each, vi } from 'vitest',
import { cleanup } from '@testing - library / react',
// Ensure React Testing Library cleans up and mocks are restored between tests;
after_each (() => {
  cleanup (),
  vi.restoreAllMocks ();
}),

=======
=======
import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup()

  vi.restoreAllMocks()
})
import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
}),
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup(),;
  vi.restoreAllMocks();
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import '@testing-library/jest-dom',;
import { afterEach, vi } from 'vitest',;
import { cleanup } from '@testing-library/react',;
;
// Ensure React Testing Library cleans up and mocks are restored between tests;
afterEach(() => {;
  cleanup(),;
  vi.restoreAllMocks(),;
}),; 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
