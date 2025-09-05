
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
  jest.clearAllMocks();
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-6439
