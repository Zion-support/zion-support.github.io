<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Card from '../components/Card;

describe('Card', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';
<<<<<<< HEAD
'
describe('Card', () => {'
=======
<<<<<<< HEAD
  describe('Card', () => {
=======

describe('Card', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<Card />);
    expect(screen.getByTestId('card)).toBeInTheDocument();
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
    render(<Card />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import Card   from '../components/Card''
  describe('Card', () => {'
  test('renders without crashing', () => {'
    render(<Card  />)
    expect(screen.getByTestId('card')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<Card  />)
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
    render(<Card />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<Card />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<Card  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<Card />);
=======

  test('applies correct styling', () => {'
    render(<Card  />)
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
