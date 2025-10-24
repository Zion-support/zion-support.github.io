import { render, screen } from "@testing-library/react"

const TestComponent = () => <div>Test Component</div>

describe('Advanced Components', () => {
  it('should render test component', () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {})
    
    render(<TestComponent />)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
    
    consoleSpy.mockRestore()
  })
})