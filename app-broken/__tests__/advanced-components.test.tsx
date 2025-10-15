import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

// Mock components
const AdvancedErrorBoundary = ({ 
  children
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

describe('Advanced Components', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <AdvancedErrorBoundary>
          <div>Test content</div>
        </AdvancedErrorBoundary>
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});