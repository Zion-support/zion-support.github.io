import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Analytics from '../components/Analytics';';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';

describe('Analytics', () => {
  test('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });
});
});
