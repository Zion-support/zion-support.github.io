<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AnalyticsManager from '../components/AnalyticsManager';';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManager from '../components/AnalyticsManager';

describe('AnalyticsManager', () => {
  test('renders without crashing', () => {
    render(<AnalyticsManager />);
    expect(screen.getByTestId('analyticsmanager')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
