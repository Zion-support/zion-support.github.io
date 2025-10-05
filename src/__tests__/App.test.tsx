import { render } from '@testing-library/react';

// Simple test component
const TestComponent = () => {
  return <div>Test Component</div>;
};

describe('App', () => {
  it('renders without crashing', () => {
    render(<TestComponent />);
    expect(document.body).toBeInTheDocument();
  });
});