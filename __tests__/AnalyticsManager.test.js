import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AnalyticsManager from '../components/AnalyticsManager';';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManager from '../components/AnalyticsManager';

describe('AnalyticsManager', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManager />);
    expect(screen.getByTestId('analyticsmanager')).toBeInTheDocument();
  });
});
});
