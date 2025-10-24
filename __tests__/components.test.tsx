import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const MockComponent = () => {
  return <div data-testid="mock-component">Mock Component</div>
}

describe('Components', () => {
  test('renders mock component', () => {
    render(<MockComponent />)
    expect(screen.getByTestId('mock-component')).toBeTruthy()
  })
  
  test('displays correct text', () => {
    render(<MockComponent />)
    expect(screen.getByText('Mock Component')).toBeTruthy()
  })
})