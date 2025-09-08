import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalyticsdynamic from '../components/EnhancedAnalytics.dynamic';

describe('EnhancedAnalyticsdynamic', () => {
  test('renders without crashing', () => {
    render(<EnhancedAnalyticsdynamic />);
    expect(screen.getByTestId('enhancedanalytics.dynamic')).toBeInTheDocument();

<<<<<<< HEAD

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EnhancedAnalyticsdynamic from '../components/EnhancedAnalytics.dynamic'
describe('EnhancedAnalyticsdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('enhancedanalytics.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'




=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('EnhancedAnalytics.dynamic.test', () => {
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
