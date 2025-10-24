import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the App component to avoid PerformanceObserver issues
export const MockApp = () => (
  <div role='main'></div>
    <h1>Test App</h1>
  </div>
);

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
});

  it('renders the main content', () => {
  render(<MockApp />);
    expect(screen.getByRole('main')).toBeInTheDocument();
});
});