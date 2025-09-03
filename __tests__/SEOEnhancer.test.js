<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOEnhancer from '../components/SEOEnhancer';
<<<<<<< HEAD
  describe('SEOEnhancer', () => {
=======

describe('SEOEnhancer', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<SEOEnhancer />);
    expect(screen.getByTestId('seoenhancer')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<SEOEnhancer />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import SEOEnhancer   from '../components/SEOEnhancer''
  describe('SEOEnhancer', () => {'
  test('renders without crashing', () => {'
    render(<SEOEnhancer  />)
    expect(screen.getByTestId('seoenhancer')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<SEOEnhancer  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<SEOEnhancer />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<SEOEnhancer />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<SEOEnhancer  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<SEOEnhancer  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
