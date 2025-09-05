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
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
