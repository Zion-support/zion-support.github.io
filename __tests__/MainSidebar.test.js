<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import MainSidebar from '../components/MainSidebar;

describe('MainSidebar', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainSidebar from '../components/MainSidebar';
<<<<<<< HEAD
'
describe('MainSidebar', () => {'
=======
<<<<<<< HEAD
  describe('MainSidebar', () => {
=======

describe('MainSidebar', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<MainSidebar />);
    expect(screen.getByTestId('mainsidebar)).toBeInTheDocument();
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
    render(<MainSidebar />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import MainSidebar   from '../components/MainSidebar''
  describe('MainSidebar', () => {'
  test('renders without crashing', () => {'
    render(<MainSidebar  />)
    expect(screen.getByTestId('mainsidebar')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<MainSidebar  />)
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
    render(<MainSidebar />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<MainSidebar />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<MainSidebar  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<MainSidebar />);
=======

  test('applies correct styling', () => {'
    render(<MainSidebar  />)
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
