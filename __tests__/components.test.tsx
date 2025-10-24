
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';
import { HelmetProvider } from 'react-helmet-async';


    render(
      <HelmetProvider>
        <div>SEO Test</div>
      </HelmetProvider>
    );
    expect(screen.getByText('SEO Test')).toBeTruthy();
  });
  
  it('renders mock component', () => {
    render(<MockComponent />);
    expect(screen.getByTestId('mock-component')).toBeTruthy();
  
  it('displays correct text', () => {
    expect(screen.getByText('Mock Component')).toBeTruthy();
