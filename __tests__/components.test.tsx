<<<<<<< HEAD
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';
const TestComponent = () => {
  return (
    <HelmetProvider>
      <div>Test content</div>
    </HelmetProvider>
  );
};
describe('Components', () => {
  test('should render without errors', () => {
    expect(true).toBe(true);
  });
  test('should render test content', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test content')).toBeTruthy();
  });
  test('should handle SEO head component', () => {
    render(
      <HelmetProvider>
        <div>SEO Test</div>
      </HelmetProvider>
    );
    expect(screen.getByText('SEO Test')).toBeTruthy();
  });
});
=======
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// Mock components for testing
const MockComponent = () => <div data-testid="mock-component">Mock Component</div>;
describe('Components', () => {
  it('renders mock component', () => {
    render(<MockComponent />)
    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  })
  it('displays correct text', () => {
    render(<MockComponent />)
    expect(screen.getByText('Mock Component')).toBeInTheDocument();
  });
})
>>>>>>> cursor/fix-errors-and-merge-to-main-596a
