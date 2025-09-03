<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import WebVitals from '../components/WebVitals;

describe('WebVitals', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WebVitals from '../components/WebVitals';
<<<<<<< HEAD
'
describe('WebVitals', () => {'
=======
<<<<<<< HEAD
  describe('WebVitals', () => {
=======

describe('WebVitals', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<WebVitals />);
    expect(screen.getByTestId('webvitals)).toBeInTheDocument();
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
    render(<WebVitals />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import WebVitals   from '../components/WebVitals''
  describe('WebVitals', () => {'
  test('renders without crashing', () => {'
    render(<WebVitals  />)
    expect(screen.getByTestId('webvitals')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<WebVitals  />)
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
    render(<WebVitals />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<WebVitals />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<WebVitals  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<WebVitals />);
=======

  test('applies correct styling', () => {'
    render(<WebVitals  />)
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
