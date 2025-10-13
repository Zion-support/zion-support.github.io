<<<<<<< HEAD
import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../app/components/LoadingSpinner';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    expect(() => render(<LoadingSpinner />)).not.toThrow();
  });
});
