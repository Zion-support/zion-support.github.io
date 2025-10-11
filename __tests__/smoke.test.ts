import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock component for testing
const SmokeTestComponent = () => {
  return (
    <div data-testid="smoke-test">
      <h1>Smoke Test</h1>
      <p>This is a smoke test component</p>
    </div>
  )
}

describe('Smoke Test', () => {
  test('renders without crashing', () => {
    render(<SmokeTestComponent />)
    expect(screen.getByTestId('smoke-test')).toBeInTheDocument()
  })

  test('displays correct content', () => {
    render(<SmokeTestComponent />)
    expect(screen.getByText('Smoke Test')).toBeInTheDocument()
    expect(screen.getByText('This is a smoke test component')).toBeInTheDocument()
  })
})