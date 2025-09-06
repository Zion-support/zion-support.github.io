
// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
// Mock Next.js Image component
jest.mock("next/image", () => {
  return function MockImage({ src, alt, ...props }) {
// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    dispatchEvent: jest.fn()
  }))
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
