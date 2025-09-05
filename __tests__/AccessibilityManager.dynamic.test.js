import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManagerdynamic from '../components/AccessibilityManager.dynamic';

describe('AccessibilityManagerdynamic', () => {
  test('renders without crashing', () => {
    render(<AccessibilityManagerdynamic />);
    expect(screen.getByTestId('accessibilitymanager.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
