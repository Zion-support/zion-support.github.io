>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import Analytics from '../components/Analytics';';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

describe('Analytics', () => {
  test('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
