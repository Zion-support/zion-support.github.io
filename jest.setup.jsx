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
        emit: jest.fn()}}
  }}))
jest.mock('./src/utils/logger.ts', () => ({
  logger: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()}}))
jest.mock('./src/utils/analytics.ts', () => ({
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
  initAnalytics: jest.fn()}))
jest.mock('./src/utils/errorTracking.ts', () => ({
  reportError: jest.fn(),
  initErrorReporting: jest.fn()}))
jest.mock('./src/hooks/usePerformance.ts', () => ({
  usePerformance: jest.fn(() => ({
    metrics: {},
    optimize: jest.fn()}))}))
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_APP_TITLE: 'Test App',
    VITE_APP_VERSION: '1.0.0',
    DEV: false,
    PROD: true},
  writable: true})
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
    dispatchEvent: jest.fn()}))})
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()}))
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()}))
ursor/automate-test-fix-improve-and-merge-code-48f3
}}
ursor/automate-test-fix-improve-and-merge-code-48f3
  k: Next.js router.mock('next/router') () => ({/* TODO: Fix JSX expression */}
}})
