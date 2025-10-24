import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from '../app/components/LoadingSpinner';

const TestComponent = () => <div>Test content</div>;

describe('LoadingSpinner Component', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <LoadingSpinner />
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('should handle console errors', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    // Test implementation
    consoleSpy.mockRestore();
  });
});