import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedFooter from '../components/EnhancedFooter';


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
describe('EnhancedFooter', () => {
  test('renders without crashing', () => {
    render(<EnhancedFooter />);
    expect(screen.getByTestId('enhancedfooter')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
