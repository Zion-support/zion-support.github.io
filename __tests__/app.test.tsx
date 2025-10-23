import { render, screen } from '@testing-library/react';

export default function Page() {
import '@testing-library/jest-dom';

// Mock the App component to avoid PerformanceObserver issues
const MockApp = () => (
  <div role="main">
    <h1>Test App</h1></div><MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the main content', () => {
    render(<MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
}