<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import TestimonialsSection from '../components/TestimonialsSection;

describe('TestimonialsSection', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../components/TestimonialsSection';
<<<<<<< HEAD
  describe('TestimonialsSection', () => {
=======

describe('TestimonialsSection', () => {
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<TestimonialsSection />);
    expect(screen.getByTestId('testimonialssection)).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<TestimonialsSection />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import TestimonialsSection   from '../components/TestimonialsSection''
  describe('TestimonialsSection', () => {'
  test('renders without crashing', () => {'
    render(<TestimonialsSection  />)
    expect(screen.getByTestId('testimonialssection')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<TestimonialsSection  />)
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
    render(<TestimonialsSection />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<TestimonialsSection />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<TestimonialsSection  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<TestimonialsSection  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
