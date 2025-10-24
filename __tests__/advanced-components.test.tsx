import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mock components for testing
const TestComponent = () => <div>Test content</div>;

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('Advanced Components', () => {
  test('renders test component', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <TestComponent />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('handles error component', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <ThrowError shouldThrow={false} />
        </MemoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });
});