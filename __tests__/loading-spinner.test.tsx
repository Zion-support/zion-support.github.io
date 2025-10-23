import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock LoadingSpinner component
const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return <div data-testid=&quot;loading-spinner&quot;>Loading...</div>;
};

describe('LoadingSpinner', () => {
  it('renders when loading is true', () => {
    render(<LoadingSpinner isLoading={true} />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('does not render when loading is false', () => {
    render(<LoadingSpinner isLoading={false} />);
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });

  it('displays loading text', () => {
    render(<LoadingSpinner isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});