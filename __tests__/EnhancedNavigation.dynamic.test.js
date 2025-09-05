import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedNavigationdynamic from '../components/EnhancedNavigation.dynamic';

describe('EnhancedNavigationdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedNavigationdynamic />);
    expect(screen.getByTestId('enhancednavigation.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
