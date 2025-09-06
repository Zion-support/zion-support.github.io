
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}

// Global test setup
beforeEach(() => {
  jest.clearAllMocks();
