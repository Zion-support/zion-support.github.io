import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalyticsdynamic from '../components/EnhancedAnalytics.dynamic';

describe('EnhancedAnalyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedAnalyticsdynamic />);
    expect(screen.getByTestId('enhancedanalytics.dynamic')).toBeInTheDocument();
  });
});
});
