import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AccessibilityManager from '../components/AccessibilityManager';';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManager from '../components/AccessibilityManager';

describe('AccessibilityManager', () => {
  test('renders without crashing', () => {
    render(<AccessibilityManager />);
    expect(screen.getByTestId('accessibilitymanager')).toBeInTheDocument();
  });
});
});
