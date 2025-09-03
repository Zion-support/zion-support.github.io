<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Analytics from '../components/Analytics;

describe('Analytics', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';
<<<<<<< HEAD
  describe('Analytics', () => {
=======

describe('Analytics', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<Analytics />);
    expect(screen.getByTestId('analytics)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<Analytics />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Analytics   from '../components/Analytics''
  describe('Analytics', () => {'
  test('renders without crashing', () => {'
    render(<Analytics  />)
    expect(screen.getByTestId('analytics')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Analytics  />)
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
    render(<Analytics />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Analytics />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Analytics  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<Analytics  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
