<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Analytics from '../components/Analytics';';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';

describe('Analytics', () => {
  test('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
