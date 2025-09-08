<<<<<<< HEAD
import _React from 'react';,
';
import '@testing-library/jest-dom';';
import AccessibilityManager from '../components/AccessibilityManager';';
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessibilityManager from '../components/AccessibilityManager';

describe('AccessibilityManager', () => {
  test('renders without crashing', () => {
    render(<AccessibilityManager />);
    expect(screen.getByTestId('accessibilitymanager')).toBeInTheDocument();
  });
<<<<<<< HEAD
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
