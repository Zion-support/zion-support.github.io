<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ServicesSection from '../components/ServicesSection;

describe('ServicesSection', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesSection from '../components/ServicesSection';
<<<<<<< HEAD
  describe('ServicesSection', () => {
=======

describe('ServicesSection', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<ServicesSection />);
    expect(screen.getByTestId('servicessection)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<ServicesSection />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ServicesSection   from '../components/ServicesSection''
  describe('ServicesSection', () => {'
  test('renders without crashing', () => {'
    render(<ServicesSection  />)
    expect(screen.getByTestId('servicessection')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<ServicesSection  />)
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
    render(<ServicesSection />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<ServicesSection />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<ServicesSection  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<ServicesSection  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
