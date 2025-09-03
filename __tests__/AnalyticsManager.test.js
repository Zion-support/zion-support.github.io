<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import AnalyticsManager from '../components/AnalyticsManager;

describe('AnalyticsManager', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnalyticsManager from '../components/AnalyticsManager';
<<<<<<< HEAD
  describe('AnalyticsManager', () => {
=======

describe('AnalyticsManager', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<AnalyticsManager />);
    expect(screen.getByTestId('analyticsmanager)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<AnalyticsManager />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import AnalyticsManager   from '../components/AnalyticsManager''
  describe('AnalyticsManager', () => {'
  test('renders without crashing', () => {'
    render(<AnalyticsManager  />)
    expect(screen.getByTestId('analyticsmanager')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<AnalyticsManager  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD

  test(handles user interactions', () => {
=======
<<<<<<< HEAD
;
  test('handles user interactions', () => {
>>>>>>> main
    render(<AnalyticsManager />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<AnalyticsManager />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<AnalyticsManager  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<AnalyticsManager  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
