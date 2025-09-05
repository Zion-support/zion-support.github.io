import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalyticsdynamic from '../components/EnhancedAnalytics.dynamic';

describe('EnhancedAnalyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedAnalyticsdynamic />);
    expect(screen.getByTestId('enhancedanalytics.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
});
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
