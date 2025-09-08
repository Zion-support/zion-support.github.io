
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analyticsdynamic from '../components/Analytics.dynamic';

describe('Analyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<Analyticsdynamic />);
    expect(screen.getByTestId('analytics.dynamic')).toBeInTheDocument();

  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
