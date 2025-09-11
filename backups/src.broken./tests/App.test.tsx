import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'

// Mock the lazy components
vi.mock('../pages/About', () => {
  return {
    default: function MockAbout() {
      return <div data-testid="about-page">About Page</div>
    }
  }
})

vi.mock('../pages/Contact', () => {
  return {
    default: function MockContact() {
      return <div data-testid="contact-page">Contact Page</div>
    }
  }
})

vi.mock('../pages/NotFound', () => {
  return {
    default: function MockNotFound() {
      return <div data-testid="not-found-page">Not Found Page</div>
    }
  }
})

describe('App', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument()
  })

  it('renders home page by default', () => {
    render(<App />)
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument()
    expect(screen.getByText('Transforming the Future with AI')).toBeInTheDocument()
  })

  it('navigates to about page', async () => {
    render(<App />)
    
    // Click on about link
    const aboutLink = screen.getByText('About')
    aboutLink.click()
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })
  })

  it('navigates to contact page', async () => {
    render(<App />)
    
    // Click on contact link
    const contactLink = screen.getByText('Contact')
    contactLink.click()
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-page')).toBeInTheDocument()
    })
  })

  it('shows 404 page for unknown routes', async () => {
    render(<App />)
    
    // Navigate to unknown route
    window.history.pushState({}, 'Test page', '/unknown-route')
    
    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
  })

  it('has proper accessibility attributes', () => {
    render(<App />)
    
    // Check for main landmark
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    
    // Check for navigation
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    // Check for heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
  })

  it('handles errors gracefully', () => {
    // Mock console.error to avoid noise in test output
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    // Create a component that throws an error
    const ErrorComponent = () => {
      throw new Error('Test error')
    }
    
    // This should not crash the app due to ErrorBoundary
    expect(() => render(<ErrorComponent />)).not.toThrow()
    
    consoleSpy.mockRestore()
  })

  it('has skip links for accessibility', () => {
    render(<App />)
    
    // Check for skip links
    const skipLinks = screen.getAllByText(/skip to/i)
    expect(skipLinks.length).toBeGreaterThan(0)
  })

  it('supports keyboard navigation', () => {
    render(<App />)
    
    // Check that all interactive elements are focusable
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
    
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toBeInTheDocument()
    })
  })
})

describe('Performance', () => {
  it('loads within acceptable time', async () => {
    const start = performance.now()
    render(<App />)
    const end = performance.now()
    
    // Should render within 100ms
    expect(end - start).toBeLessThan(100)
  })

  it('has proper meta tags', () => {
    render(<App />)
    
    // Check for viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]')
    expect(viewport).toBeInTheDocument()
  })
})

describe('Service Worker', () => {
  beforeEach(() => {
    // Mock service worker
    Object.defineProperty(navigator, 'serviceWorker', {
      value: {
        register: vi.fn().mockResolvedValue({}),
        ready: Promise.resolve({}),
        controller: null
      },
      writable: true
    })
  })

  it('registers service worker in production', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'
    
    render(<App />)
    
    // Service worker should be registered
    expect(navigator.serviceWorker.register).toHaveBeenCalled()
    
    process.env.NODE_ENV = originalEnv
  })
})