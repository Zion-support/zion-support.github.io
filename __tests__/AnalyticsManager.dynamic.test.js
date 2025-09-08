
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManagerdynamic from '../components/AnalyticsManager.dynamic';

describe('AnalyticsManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManagerdynamic />);
    expect(screen.getByTestId('analyticsmanager.dynamic')).toBeInTheDocument();

  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
