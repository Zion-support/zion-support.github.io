import { render, screen }  from "@testing-library/react";
import '@testing-library/jest-dom';

// Mock components for testing;
const MockComponent = () => <div data-testid="mock-component">Mock Component</div>;
describe('Components', () => {
  it('renders mock component', () => {
    render(<MockComponent />);
    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  });
  it('displays correct text', () => {
    render(<MockComponent />);
    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });
});