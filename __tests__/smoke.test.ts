import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Simple smoke test component
const SmokeTestComponent: React.FC = () => {
  return (
    <div data-testid="smoke-test">
      <h1>Smoke Test</h1>
      <p>This is a smoke test component</p>
    </div>
  )
}

describe('Smoke Tests', () => {
  test('renders without crashing', () => {
    render(<SmokeTestComponent />)
    expect(screen.getByTestId('smoke-test')).toBeInTheDocument()
  })

  test('displays correct content', () => {
    render(<SmokeTestComponent />)
    expect(screen.getByText('Smoke Test')).toBeInTheDocument()
    expect(screen.getByText('This is a smoke test component')).toBeInTheDocument()
  })

  test('basic functionality works', () => {
    const result = 2 + 2
    expect(result).toBe(4)
  })

  test('environment is set up correctly', () => {
    expect(process.env.NODE_ENV).toBeDefined()
  })
})