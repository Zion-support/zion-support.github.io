import { render, screen } from '@testing-library/react';

export default function Page() {
import '@testing-library/jest-dom';

// Mock components for testing
const MockComponent = () => <div data-testid="mock-component">Mock Component</div><MockComponent />);
    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  });

  it('displays correct text', () => {
    render(<MockComponent />);
    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });
});
}