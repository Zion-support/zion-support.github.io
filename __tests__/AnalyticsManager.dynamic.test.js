import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';

describe('AnalyticsManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManagerdynamic />);
    expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument();
  });
});
});
