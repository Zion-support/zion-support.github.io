import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import '@testing-library/jest-dom';

const TestComponent = () => <div>Test content</div>;

describe('Components', () => {
  test('renders test component', () => {
    render(
      <HelmetProvider>
        <TestComponent />
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});