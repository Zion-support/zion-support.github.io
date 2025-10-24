import { TextEncoder, TextDecoder } from 'util'
import '@testing-library/jest-dom'
<<<<<<< HEAD
=======
// Polyfill fetch and enable fetch mocks
import 'whatwg-fetch'
// import fetchMock from 'jest-fetch-mock'
// fetchMock.enableMocks();
// Reset fetch mocks before each test to ensure isolation
// beforeEach(() => {
//   fetchMock.resetMocks();
// })
// Polyfill TextEncoder and TextDecoder for JSDOM environment
// Set up a mock for Vite environment variables accessed via import.meta.env
process.env['VITE_REOWN_PROJECT_ID'] = 'test_project_id_from_jest_setup'
process.env['NEXT_PUBLIC_SUPABASE_URL'] = 'http://localhost:54321'
process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] = 'test_anon_key'
>>>>>>> cursor/fix-errors-and-merge-to-main-596a

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
<<<<<<< HEAD
    dispatchEvent: jest.fn(),
  })),
})

// Mock URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(URL, 'revokeObjectURL', {
    writable: true,
    value: jest.fn(),
  })
=======
    dispatchEvent: jest.fn();
  }))
})

// Mock ResizeObserver for Radix UI components and other libraries that might use it
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn();
}))
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
// Polyfill for URL.revokeObjectURL
if (typeof URL.revokeObjectURL === 'undefined') {
  URL.revokeObjectURL = jest.fn();
>>>>>>> cursor/fix-errors-and-merge-to-main-596a
}

// Mock window.scrollTo
if (typeof window.scrollTo === 'undefined') {
<<<<<<< HEAD
  Object.defineProperty(window, 'scrollTo', {
    writable: true,
    value: jest.fn(),
  })
=======
  window.scrollTo = jest.fn();
>>>>>>> cursor/fix-errors-and-merge-to-main-596a
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

<<<<<<< HEAD
// Mock framer-motion
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

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => children,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock web-vitals
jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}))
=======
// Ensure all code paths use the mock implementation;
// global.fetch = fetchMock
>>>>>>> cursor/fix-errors-and-merge-to-main-596a
