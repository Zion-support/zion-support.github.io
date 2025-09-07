import '@testing-library/jest-dom';

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Global test setup
beforeEach(() => {
  // Reset all mocks before each test
  jest.clearAllMocks();
});

