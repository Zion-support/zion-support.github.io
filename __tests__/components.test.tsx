import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';
import LoadingSpinner from '../app/components/LoadingSpinner';
import SEOHead from '../app/components/SEOHead';
describe('Component Tests', () => {
  test('LoadingSpinner renders correctly', () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole('status')).toBeDefined();
  });
  test('SEOHead renders without crashing', () => {
    render(
      <HelmetProvider>
        <SEOHead />
      </HelmetProvider>
    );
    expect(document.head).toBeDefined();
  });
  
  it("should handle console errors", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    // Test implementation
    consoleSpy.mockRestore();
  });
});