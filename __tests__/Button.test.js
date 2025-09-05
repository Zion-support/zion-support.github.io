<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Button from '../components/Button';';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
