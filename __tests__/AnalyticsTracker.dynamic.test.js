import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic';

describe('AnalyticsTrackerdynamic', () => {
  test('renders without crashing', () => {
    render(<AnalyticsTrackerdynamic />);
    expect(screen.getByTestId('analyticstracker.dynamic')).toBeInTheDocument();

<<<<<<< HEAD

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnalyticsTrackerdynamic from '../components/AnalyticsTracker.dynamic'
describe('AnalyticsTrackerdynamic'
  test('renders without crashing'
    expect(screen.getByTestId('analyticstracker.dynamic'
  test('displays correct content'
  test('handles user interactions'
  test('applies correct styling'




=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AnalyticsTracker.dynamic.test', () => {
  test('renders without crashing', () => {
    render(<AnalyticsTracker />);
    expect(screen.getByTestId('analyticstracker')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
