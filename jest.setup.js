import '@testing-library/jest-dom'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock react-router-dom
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom')
  return {
    ...actual,
    useLocation: () => ({
      pathname: '/',
      search: '',
      hash: '',
      key: 'default',
    }),
    useNavigate: () => jest.fn(),
    Link: ({ children, ...props }) => {
      const mockReact = jest.requireActual('react')
      return mockReact.createElement('a', props, children)
    },
    useRoutes: () => {
      const mockReact = jest.requireActual('react')
      return mockReact.createElement('div', { 'data-testid': 'router' })
    },
  }
})

// Suppress console warnings
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Warning: ReactDOM.render is no longer supported')) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})