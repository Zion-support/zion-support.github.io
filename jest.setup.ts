import { TextEncoder, TextDecoder } from 'util'
import '@testing-library/jest-dom'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(URL, 'revokeObjectURL', {
    writable: true,
    value: jest.fn(),
  })
}

// Mock window.scrollTo
if (typeof window.scrollTo === 'undefined') {
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
  })
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as any

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock PerformanceObserver
global.PerformanceObserver = class PerformanceObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock TextEncoder and TextDecoder
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

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
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    }
  },
}))

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock framer-motion (only if installed)
try {
  require('framer-motion')
  jest.mock('framer-motion', () => ({
    motion: {
      div: 'div',
      span: 'span',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      p: 'p',
      button: 'button',
      section: 'section',
      article: 'article',
      header: 'header',
      footer: 'footer',
      nav: 'nav',
      main: 'main',
      aside: 'aside',
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useAnimation: () => ({
      start: jest.fn(),
      stop: jest.fn(),
      set: jest.fn(),
    }),
    useInView: () => true,
    useMotionValue: () => ({ get: jest.fn(), set: jest.fn() }),
    useTransform: () => ({ get: jest.fn(), set: jest.fn() }),
    useSpring: () => ({ get: jest.fn(), set: jest.fn() }),
    useScroll: () => ({ scrollY: { get: jest.fn() } }),
    useViewportScroll: () => ({ scrollY: { get: jest.fn() } }),
  }))
} catch (e) {
  // framer-motion not installed, skip mocking
}

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => children,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock web-vitals (only if installed)
try {
  require('web-vitals')
  jest.mock('web-vitals', () => ({
    getCLS: jest.fn(),
    getFID: jest.fn(),
    getFCP: jest.fn(),
    getLCP: jest.fn(),
    getTTFB: jest.fn(),
  }))
} catch (e) {
  // web-vitals not installed, skip mocking
}