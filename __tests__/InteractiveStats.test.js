<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import InteractiveStats from '../components/InteractiveStats;

describe('InteractiveStats', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveStats from '../components/InteractiveStats';
<<<<<<< HEAD
'
describe('InteractiveStats', () => {'
=======
<<<<<<< HEAD
  describe('InteractiveStats', () => {
=======

describe('InteractiveStats', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<InteractiveStats />);
    expect(screen.getByTestId('interactivestats)).toBeInTheDocument();
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
    render(<InteractiveStats />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import InteractiveStats   from '../components/InteractiveStats''
  describe('InteractiveStats', () => {'
  test('renders without crashing', () => {'
    render(<InteractiveStats  />)
    expect(screen.getByTestId('interactivestats')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<InteractiveStats  />)
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
    render(<InteractiveStats />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<InteractiveStats />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<InteractiveStats  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<InteractiveStats />);
=======

  test('applies correct styling', () => {'
    render(<InteractiveStats  />)
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
