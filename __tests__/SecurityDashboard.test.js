<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecurityDashboard from '../components/SecurityDashboard';
<<<<<<< HEAD
  describe('SecurityDashboard', () => {
=======

describe('SecurityDashboard', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<SecurityDashboard />);
    expect(screen.getByTestId('securitydashboard')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<SecurityDashboard />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import SecurityDashboard   from '../components/SecurityDashboard''
  describe('SecurityDashboard', () => {'
  test('renders without crashing', () => {'
    render(<SecurityDashboard  />)
    expect(screen.getByTestId('securitydashboard')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<SecurityDashboard  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<SecurityDashboard />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<SecurityDashboard />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<SecurityDashboard  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<SecurityDashboard  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
