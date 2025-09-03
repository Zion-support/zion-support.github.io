<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ModernLayout from '../components/ModernLayout;

describe('ModernLayout', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModernLayout from '../components/ModernLayout';
<<<<<<< HEAD
  describe('ModernLayout', () => {
=======

describe('ModernLayout', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ModernLayout />);
    expect(screen.getByTestId('modernlayout)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<ModernLayout />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ModernLayout   from '../components/ModernLayout''
  describe('ModernLayout', () => {'
  test('renders without crashing', () => {'
    render(<ModernLayout  />)
    expect(screen.getByTestId('modernlayout')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ModernLayout  />)
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
    render(<ModernLayout />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ModernLayout />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ModernLayout  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<ModernLayout  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
