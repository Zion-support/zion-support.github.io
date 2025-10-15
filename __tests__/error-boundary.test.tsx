import React from 'react',
    import { render, screen } from '@testing-library/react',
      import '@testing-library/jest-dom',
    import { BrowserRouter } from 'react-router-dom',
    import ErrorBoundary from '../app/components/ErrorBoundary';

;
// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>
    };
    {

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Suppress console.error for these tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  }),
      afterEach(() => {
    jest.restoreAllMocks();
  }),
      render(
      <BrowserRouter>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </BrowserRouter>
    ),
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
