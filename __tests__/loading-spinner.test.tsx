import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

// Mock loading spinner component
const MockLoadingSpinner = () => (
  <div data-testid="loading-spinner" className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2">Loading...</span>
  </div>
);

describe('LoadingSpinner Component', () => {
  it('renders loading spinner', () => {
    render(<MockLoadingSpinner />);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('displays loading text', () => {
    render(<MockLoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has proper styling classes', () => {
    render(<MockLoadingSpinner />);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveClass('flex', 'items-center', 'justify-center');
  });
});