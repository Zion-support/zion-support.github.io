import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedFooterdynamic from '../components/EnhancedFooter.dynamic';

describe('EnhancedFooterdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedFooterdynamic />);
    expect(screen.getByTestId('enhancedfooter.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
