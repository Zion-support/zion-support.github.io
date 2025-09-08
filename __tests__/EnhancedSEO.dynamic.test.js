import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic';

describe('EnhancedSEOdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedSEOdynamic />);
    expect(screen.getByTestId('enhancedseo.dynamic')).toBeInTheDocument();

<<<<<<< HEAD

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EnhancedSEOdynamic from '../components/EnhancedSEO.dynamic'
describe('EnhancedSEOdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('enhancedseo.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'




=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EnhancedSEO.dynamic.test', () => {
  test('renders without crashing', () => {
    render(<EnhancedSEO />);
    expect(screen.getByTestId('enhancedseo')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
