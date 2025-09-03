<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import SecurityHeaders from '../components/SecurityHeaders;

describe('SecurityHeaders', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecurityHeaders from '../components/SecurityHeaders';
<<<<<<< HEAD
  describe('SecurityHeaders', () => {
=======

describe('SecurityHeaders', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<SecurityHeaders />);
    expect(screen.getByTestId('securityheaders)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<SecurityHeaders />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import SecurityHeaders   from '../components/SecurityHeaders''
  describe('SecurityHeaders', () => {'
  test('renders without crashing', () => {'
    render(<SecurityHeaders  />)
    expect(screen.getByTestId('securityheaders')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<SecurityHeaders  />)
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
    render(<SecurityHeaders />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<SecurityHeaders />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<SecurityHeaders  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<SecurityHeaders  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
