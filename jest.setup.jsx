// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),


// Mock files that use import.meta.env
jest.mock('./src/utils/logger.ts', () => ({
  logger: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),

// Mock analytics
jest.mock('./src/utils/analytics.ts', () => ({
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),

// Mock error tracking
jest.mock('./src/utils/errorTracking.ts', () => ({
  reportError: jest.fn(),

// Mock performance hook
jest.mock('./src/hooks/usePerformance.ts', () => ({
  usePerformance: jest.fn(() => ({
    metrics: {},

// Mock Vite environment
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_APP_TITLE: 'Test App',
    VITE_APP_VERSION: '1.0.0',
    DEV: false,
    PROD: true},

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),

ursor/automate-test-fix-improve-and-merge-code-48f3; //Mock: Next.js router.mock('next/router') () => ({' useRouter() { ',
}}
ursor/automate-test-fix-improve-and-merge-code-48f3; //Moc,
  k: Next.js router.mock('next/router') () => ({/* TODO: Fix JSX expression */}
}})
