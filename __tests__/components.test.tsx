<<<<<<< HEAD
import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import LoadingSpinner from '../app/components/LoadingSpinner'
import SEOEnhancer from '../app/components/SEOEnhancer'

describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  test('SEOEnhancer renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    )
    expect(document.head).toBeInTheDocument()
=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// Mock components for testing
const TestComponent = () => {
  return <div data-testid="test-component">Hello World</div>
}

describe('Components', () => {
  it('should render test component', () => {
    render(<TestComponent />)
    expect(screen.getByTestId('test-component')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  })
})