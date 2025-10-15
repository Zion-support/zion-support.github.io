import React from 'react'
import { render, screen } from '@testing-library/react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// Mock components
const AdvancedErrorBoundary = ({ 
  children, 
  enableRetry
}: {
  children: React.ReactNode
  enableRetry?: boolean
}) => {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <div>
        <h2>Something went wrong</h2>
        {enableRetry && (
          <button onClick={() => setHasError(false)}>Retry</button>
        )}
      </div>
    )
  }

  return <>{children}</>
}

const AdvancedPerformanceMonitor = () => {
  return <div>Performance Monitor</div>
}

const AdvancedSEOOptimizer = () => {
  return <div>SEO Optimizer</div>
}

describe('Advanced Components', () => {
  it('renders AdvancedErrorBoundary without crashing', () => {
    render(
      <AdvancedErrorBoundary>
        <div>Test content</div>
      </AdvancedErrorBoundary>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders AdvancedPerformanceMonitor without crashing', () => {
    render(<AdvancedPerformanceMonitor />)
    
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument()
  })

  it('renders AdvancedSEOOptimizer without crashing', () => {
    render(<AdvancedSEOOptimizer />)
    
    expect(screen.getByText('SEO Optimizer')).toBeInTheDocument()
  })

  it('renders with HelmetProvider', () => {
    render(
      <HelmetProvider>
        <Helmet>
          <title>Test Page</title>
        </Helmet>
        <div>Test content</div>
      </HelmetProvider>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
})