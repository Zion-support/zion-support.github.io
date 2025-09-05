import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analyticsdynamic from '../components/Analytics.dynamic';

describe('Analyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<Analyticsdynamic />);
    expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument();
  });
});
});
