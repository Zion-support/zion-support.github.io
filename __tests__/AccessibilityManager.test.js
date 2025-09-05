<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AccessibilityManager from '../components/AccessibilityManager';';
=======
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManager from '../components/AccessibilityManager';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326

describe('AccessibilityManager', () => {
  test('renders without crashing', () => {
    render(<AccessibilityManager />);
    expect(screen.getByTestId('accessibilitymanager')).toBeInTheDocument();
  });
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
});
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
