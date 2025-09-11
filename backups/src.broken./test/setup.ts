/**
 * Test Setup Configuration
 * Configures the testing environment for Jest
 */

import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Polyfill TextEncoder and TextDecoder for Node.js environment
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Cleanup after each test
afterEach(() => {
  cleanup()
})

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

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
})

// Mock window.location (commented out to avoid issues)
// Object.defineProperty(window, 'location', {
//   value: {
//     href: 'http://localhost:3000',
//     origin: 'http://localhost:3000',
//     pathname: '/',
//     search: '',
//     hash: '',
//     assign: jest.fn(),
//     replace: jest.fn(),
//     reload: jest.fn(),
//   },
//   writable: true,
//   configurable: true,
// });

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
})

// Mock fetch
global.fetch = jest.fn()

// Mock console methods to reduce noise in tests
const originalConsoleError = console.error
const originalConsoleWarn = console.warn

beforeEach(() => {
  console.error = jest.fn()
  console.warn = jest.fn()
})

afterEach(() => {
  console.error = originalConsoleError
  console.warn = originalConsoleWarn
  jest.clearAllMocks()
})

// Mock React Router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  }),
  useParams: () => ({}),
}))

// Mock React Query
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(() => ({
    data: null,
    isLoading: false,
    isError: false,
    error: null,
    refetch: jest.fn(),
  })),
  useMutation: jest.fn(() => ({
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    isLoading: false,
    isError: false,
    error: null,
  })),
  QueryClient: jest.fn(),
  QueryClientProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock Supabase
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: {
      signIn: jest.fn(),
      signOut: jest.fn(),
      getUser: jest.fn(),
      onAuthStateChange: jest.fn(),
    },
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
    })),
  })),
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    span: 'span',
    button: 'button',
    img: 'img',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    stop: jest.fn(),
    set: jest.fn(),
  }),
}))

// Mock React Helmet
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => children,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}))

// Mock React Hot Toast (if needed)
// jest.mock('react-hot-toast', () => ({
//   toast: {
//     success: jest.fn(),
//     error: jest.fn(),
//     loading: jest.fn(),
//     dismiss: jest.fn(),
//   },
//   Toaster: () => null,
// }))

// Mock date-fns
jest.mock('date-fns', () => ({
  format: jest.fn((date) => date.toString()),
  parseISO: jest.fn((date) => new Date(date)),
  isToday: jest.fn(() => false),
  isYesterday: jest.fn(() => false),
}))

// Mock lodash.debounce (if needed)
// jest.mock('lodash.debounce', () => ({
//   default: jest.fn((fn) => fn),
// }))

// Mock axios (if needed)
// jest.mock('axios', () => ({
//   default: {
//     get: jest.fn(),
//     post: jest.fn(),
//     put: jest.fn(),
//     delete: jest.fn(),
//     patch: jest.fn(),
//     create: jest.fn(() => ({
//       get: jest.fn(),
//       post: jest.fn(),
//       put: jest.fn(),
//       delete: jest.fn(),
//       patch: jest.fn(),
//     })),
//   },
// }))

// Mock environment variables (if needed)
// jest.mock('import.meta.env', () => ({
//   VITE_SUPABASE_URL: 'https://test.supabase.co',
//   VITE_SUPABASE_ANON_KEY: 'test-key',
//   VITE_API_URL: 'https://api.test.com',
//   NODE_ENV: 'test',
// }))

// Setup test utilities
export const testUtils = {
  mockFetch: (response: unknown, status = 200) => {
    ;(global.fetch as any).mockResolvedValueOnce({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(response),
      text: () => Promise.resolve(JSON.stringify(response)),
    })
  },
  mockFetchError: (error: string) => {
    ;(global.fetch as any).mockRejectedValueOnce(new Error(error))
  },
  clearMocks: () => {
    jest.clearAllMocks()
    localStorageMock.getItem.mockClear()
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
    sessionStorageMock.getItem.mockClear()
    sessionStorageMock.setItem.mockClear()
    sessionStorageMock.removeItem.mockClear()
    sessionStorageMock.clear.mockClear()
  },
}