
// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
<<<<<<< HEAD
  jest.clearAllMocks();
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6439
=======
  jest.clearAllMocks()});
>>>>>>> cursor/automate-test-improve-and-merge-code-948c
