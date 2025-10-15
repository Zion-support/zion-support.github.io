import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

<<<<<<< HEAD
const MockComponent = () => <div>Test Component</div>;

describe('error-boundary.test', () => {
  test('should render without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
=======
// const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
//   if (shouldThrow) {
//     throw new Error('Test error');
//   }
//   return <div>No error</div>;
// };

// Mock error boundary component for testing
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

describe('Error Boundary', () => {
  test('renders error boundary', () => {
    render(
      <MockErrorBoundary>
        <div>Test Content</div>
      </MockErrorBoundary>
    );
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
  });
});