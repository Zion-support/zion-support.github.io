import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalytics from '../components/EnhancedAnalytics';

describe('EnhancedAnalytics', () => {
  test('renders without crashing', () => {
    render(<EnhancedAnalytics />);
    expect(screen.getByTestId('enhancedanalytics')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
