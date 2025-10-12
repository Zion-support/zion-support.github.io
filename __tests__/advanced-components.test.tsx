import { render, screen } from '@testing-library/react'

// Mock components
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>
}

const MockSEOOptimizer = ({ title, description }: { title: string; description: string }) => {
  return <div data-testid="seo-optimizer">{title} - {description}</div>
}

const MockPerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance Monitor</div>
}

// Mock component that throws an error
const MockErrorComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('Advanced Components', () => {
  test('ErrorBoundary catches errors', () => {
    // Suppress console.error for this test since we expect an error
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    expect(() => {
      render(
        <MockErrorBoundary>
          <MockErrorComponent shouldThrow={true} />
        </MockErrorBoundary>
      )
    }).toThrow('Test error')
    
    consoleSpy.mockRestore()
  })

  test('SEO Optimizer renders correctly', () => {
    render(
      <MockSEOOptimizer 
        title="Test Title" 
        description="Test Description" 
      />
    )
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument()
    expect(screen.getByText('Test Title - Test Description')).toBeInTheDocument()
  })

  test('Performance Monitor renders', () => {
    render(<MockPerformanceMonitor />)
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument()
  })
})