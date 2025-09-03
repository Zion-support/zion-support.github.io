<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PWARegistration from '../components/PWARegistration';
<<<<<<< HEAD
  describe('PWARegistration', () => {
=======

describe('PWARegistration', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<PWARegistration />);
    expect(screen.getByTestId('pwaregistration')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<PWARegistration />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import PWARegistration   from '../components/PWARegistration''
  describe('PWARegistration', () => {'
  test('renders without crashing', () => {'
    render(<PWARegistration  />)
    expect(screen.getByTestId('pwaregistration')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<PWARegistration  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<PWARegistration />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<PWARegistration />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<PWARegistration  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<PWARegistration  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
