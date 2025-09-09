import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import { AccessibilityProvider } from '../components/AccessibilityProvider';

const TestComponent = () => (
  <div>
    <h1>Test Heading</h1>
    <button>Test Button</button>
  </div>
);

describe('Accessibility Tests', () => {
  test('renders with accessibility provider', () => {
    render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });