<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import InteractiveElements from '../components/InteractiveElements;

describe('InteractiveElements', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveElements from '../components/InteractiveElements';
<<<<<<< HEAD
  describe('InteractiveElements', () => {
=======

describe('InteractiveElements', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<InteractiveElements />);
    expect(screen.getByTestId('interactiveelements)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<InteractiveElements />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import InteractiveElements   from '../components/InteractiveElements''
  describe('InteractiveElements', () => {'
  test('renders without crashing', () => {'
    render(<InteractiveElements  />)
    expect(screen.getByTestId('interactiveelements')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<InteractiveElements  />)
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
    render(<InteractiveElements />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<InteractiveElements />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<InteractiveElements  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<InteractiveElements  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
