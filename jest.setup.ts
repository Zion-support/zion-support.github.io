// Jest setup file for testing environment
import '@testing-library/jest-dom';

// Mock global objects that might not be available in test environment
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
