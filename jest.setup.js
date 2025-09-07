<<<<<<< HEAD
<<<<<<< HEAD
import '@testing-library/jest-dom';
=======
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

>>>>>>> cursor/automate-test-improve-and-merge-code-6d57
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
