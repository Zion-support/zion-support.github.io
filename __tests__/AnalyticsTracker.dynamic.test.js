import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic';

describe('AnalyticsTrackerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsTrackerdynamic />);
    expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument();
  });
});
});
