import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analyticsdynamic from '../components/Analytics.dynamic';

describe('Analyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<Analyticsdynamic />);
    expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument();
  });
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
