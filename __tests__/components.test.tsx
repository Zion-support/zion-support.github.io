import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import { HelmetProvider } from 'react-helmet-async'

// Mock component for testing
const MockComponent = () => (
  <div data-testid="mock-component">
    Mock Component
  </div>
)

describe('Component Tests', () => {
  test('renders with HelmetProvider', () => {
    render(
      <HelmetProvider>
        <div>SEO Test</div>
      </HelmetProvider>
    )
    expect(screen.getByText('SEO Test')).toBeTruthy()
  })
  
  test('renders mock component', () => {
    render(<MockComponent />)
    expect(screen.getByTestId('mock-component')).toBeTruthy()
  })
  
  test('displays correct text', () => {
    render(<MockComponent />)
    expect(screen.getByText('Mock Component')).toBeTruthy()
  })
})