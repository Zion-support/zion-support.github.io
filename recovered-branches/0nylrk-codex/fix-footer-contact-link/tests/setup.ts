
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
=======
=======import '@testing - library / jest - dom',
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

<<<<<<< HEAD
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
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
