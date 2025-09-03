<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ModernHeader from '../components/ModernHeader;

describe('ModernHeader', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModernHeader from '../components/ModernHeader';
<<<<<<< HEAD
'
describe('ModernHeader', () => {'
=======
<<<<<<< HEAD
  describe('ModernHeader', () => {
=======

describe('ModernHeader', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ModernHeader />);
    expect(screen.getByTestId('modernheader)).toBeInTheDocument();
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
    render(<ModernHeader />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ModernHeader   from '../components/ModernHeader''
  describe('ModernHeader', () => {'
  test('renders without crashing', () => {'
    render(<ModernHeader  />)
    expect(screen.getByTestId('modernheader')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ModernHeader  />)
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
    render(<ModernHeader />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ModernHeader />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ModernHeader  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<ModernHeader />);
=======

  test('applies correct styling', () => {'
    render(<ModernHeader  />)
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
