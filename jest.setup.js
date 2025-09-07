import '@testing-library/jest-dom';

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks()
})

