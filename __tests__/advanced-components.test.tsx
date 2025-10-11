import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>Test content</div>
}
describe('Advanced Components', () => {
  it('renders test content without error', () => {

    render(
      <MemoryRouter>
        <ThrowError shouldThrow={false} />
      </MemoryRouter>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })
  it('handles error when shouldThrow is true', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    // In React testing, errors are caught by error boundaries
    // We just verify the component doesn't crash the test
    expect(() => {
      render(
        <MemoryRouter>
          <ThrowError shouldThrow={true} />
        </MemoryRouter>
      )
    }).not.toThrow()
    consoleSpy.mockRestore()
  })
})