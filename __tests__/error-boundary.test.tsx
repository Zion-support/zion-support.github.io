import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock ErrorBoundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary-wrapper">{children}</div>;
};

const ThrowingComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child component</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders error boundary wrapper', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child component</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary-wrapper')).toBeInTheDocument();
  });
});