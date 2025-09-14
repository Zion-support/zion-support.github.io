import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManagerdynamic from '../components/AccessibilityManager.dynamic';

describe('AccessibilityManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AccessibilityManagerdynamic />);
    expect(screen.getByTestId('accessibilitymanager.dynamic')).toBeInTheDocument();
  });
});
});
