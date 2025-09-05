import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

describe('AccessibilityEnhancer', () => {
  test('renders without crashing', () => {
    render(<AccessibilityEnhancer />);
    expect(screen.getByTestId('accessibilityenhancer')).toBeInTheDocument();
  });
});
});
