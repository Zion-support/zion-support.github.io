<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ErrorBoundary from '../components/ErrorBoundary;

describe('ErrorBoundary', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../components/ErrorBoundary';
<<<<<<< HEAD
'
describe('ErrorBoundary', () => {'
=======
<<<<<<< HEAD
  describe('ErrorBoundary', () => {
=======

describe('ErrorBoundary', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ErrorBoundary />);
    expect(screen.getByTestId('errorboundary)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======
<<<<<<< HEAD
;
=======

>>>>>>> main
>>>>>>> main
  test('displays correct content', () => {
    render(<ErrorBoundary />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ErrorBoundary   from '../components/ErrorBoundary''
  describe('ErrorBoundary', () => {'
  test('renders without crashing', () => {'
    render(<ErrorBoundary  />)
    expect(screen.getByTestId('errorboundary')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ErrorBoundary  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
'
=======
<<<<<<< HEAD

  test(handles user interactions', () => {
=======
<<<<<<< HEAD
;
>>>>>>> main
  test('handles user interactions', () => {
>>>>>>> main
    render(<ErrorBoundary />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ErrorBoundary />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ErrorBoundary  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<ErrorBoundary />);
=======

  test('applies correct styling', () => {'
    render(<ErrorBoundary  />)
>>>>>>> main
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
<<<<<<< HEAD
'
=======
=======
  })
})
>>>>>>> main
>>>>>>> main
