import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { vi } from 'vitest'
import { AnalyticsProvider } from '../context/AnalyticsContext'
import { LanguageProvider } from '../context/LanguageContext'
import { ViewModeProvider } from '../context/ViewModeContext'
import { WhitelabelProvider } from '../context/WhitelabelContext'

// Mock implementations for testing
const mockAnalytics = {
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  setUser: vi.fn(),
  identify: vi.fn()
}

const mockLanguage = {
  language: 'en',
  setLanguage: vi.fn(),
  t: (key: string) => key
}

const mockViewMode = {
  viewMode: 'grid',
  setViewMode: vi.fn(),
  toggleViewMode: vi.fn()
}

const mockWhitelabel = {
  theme: 'default',
  setTheme: vi.fn(),
  branding: {
    logo: '',
    companyName: 'Zion Tech Group',
    primaryColor: '#3b82f6'
  }
}

// Create a custom render function that includes providers
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AnalyticsProvider>
          <LanguageProvider>
            <ViewModeProvider>
              <WhitelabelProvider>
                {children}
              </WhitelabelProvider>
            </ViewModeProvider>
          </LanguageProvider>
        </AnalyticsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Test utilities
export const createMockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  avatar: '',
  ...overrides
})

export const createMockService = (overrides = {}) => ({
  id: '1',
  name: 'Test Service',
  description: 'A test service',
  price: 100,
  category: 'AI',
  ...overrides
})

export const createMockProject = (overrides = {}) => ({
  id: '1',
  title: 'Test Project',
  description: 'A test project',
  status: 'active',
  ...overrides
})

// Mock data factories
export const mockServices = Array.from({ length: 10 }, (_, i) => 
  createMockService({
    id: `${i + 1}`,
    name: `Service ${i + 1}`,
    price: (i + 1) * 100
  })
)

export const mockProjects = Array.from({ length: 5 }, (_, i) => 
  createMockProject({
    id: `${i + 1}`,
    title: `Project ${i + 1}`,
    status: i % 2 === 0 ? 'active' : 'completed'
  })
)

// Test helpers
export const waitForLoadingToFinish = () => 
  new Promise(resolve => setTimeout(resolve, 0))

export const mockFetch = (data: unknown, status = 200) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(data),
      text: () => Promise.resolve(JSON.stringify(data))
    })
  ) as any
}

export const mockLocalStorage = () => {
  const store: Record<string, string> = {}
  
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      Object.keys(store).forEach(key => delete store[key])
    })
  }
}

// Accessibility testing helpers
export const checkA11y = async (container: HTMLElement) => {
  const { axe, toHaveNoViolations } = await import('jest-axe')
  expect.extend(toHaveNoViolations)
  
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}

// Performance testing helpers
export const measurePerformance = (fn: () => void) => {
  const start = performance.now()
  fn()
  const end = performance.now()
  return end - start
}

// Mock router
export const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  goBack: vi.fn(),
  goForward: vi.fn(),
  location: {
    pathname: '/',
    search: '',
    hash: '',
    state: null
  }
}

// Clean up after tests
export const cleanup = () => {
  vi.clearAllMocks()
  localStorage.clear()
  sessionStorage.clear()
}