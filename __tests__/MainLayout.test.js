<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainLayout from '../components/MainLayout';
<<<<<<< HEAD
  describe('MainLayout', () => {
=======

describe('MainLayout', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<MainLayout />);
    expect(screen.getByTestId('mainlayout')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<MainLayout />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import MainLayout   from '../components/MainLayout''
  describe('MainLayout', () => {'
  test('renders without crashing', () => {'
    render(<MainLayout  />)
    expect(screen.getByTestId('mainlayout')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<MainLayout  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<MainLayout />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<MainLayout />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<MainLayout  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<MainLayout  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
