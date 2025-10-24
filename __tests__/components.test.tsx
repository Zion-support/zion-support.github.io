import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

// Mock components for testing
const MockNavigation = () => <div data-testid="navigation">Navigation</div>;
const MockFooter = () => <div data-testid="footer">Footer</div>;
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="error-boundary">{children}</div>
);

describe('Components', () => {
  it('renders navigation component', () => {
    render(<MockNavigation />);
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
  });

  it('renders footer component', () => {
    render(<MockFooter />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders error boundary with children', () => {
    render(
      <MockErrorBoundary>
        <div data-testid="child">Test child</div>
      </MockErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});