<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHead from '../components/SEOHead';
<<<<<<< HEAD
  describe('SEOHead', () => {
=======

describe('SEOHead', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<SEOHead />);
    expect(screen.getByTestId('seohead')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<SEOHead />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import SEOHead   from '../components/SEOHead''
  describe('SEOHead', () => {'
  test('renders without crashing', () => {'
    render(<SEOHead  />)
    expect(screen.getByTestId('seohead')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<SEOHead  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<SEOHead />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<SEOHead />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<SEOHead  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<SEOHead  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
