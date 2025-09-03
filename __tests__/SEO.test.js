<<<<<<< HEAD
import React from 'react;
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import SEO from '../components/SEO;

describe('SEO', () => {
  test(renders without crashing', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';
<<<<<<< HEAD
'
describe('SEO', () => {'
=======
<<<<<<< HEAD
  describe('SEO', () => {
=======

describe('SEO', () => {
>>>>>>> main
>>>>>>> main
  test('renders without crashing', () => {
>>>>>>> main
    render(<SEO />);
    expect(screen.getByTestId('seo)).toBeInTheDocument();
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
    render(<SEO />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import SEO   from '../components/SEO''
  describe('SEO', () => {'
  test('renders without crashing', () => {'
    render(<SEO  />)
    expect(screen.getByTestId('seo')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<SEO  />)
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
    render(<SEO />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<SEO  />)
    // Add interaction tests based on component functionality
  });
<<<<<<< HEAD
'
  test('applies correct styling', () => {
    render(<SEO />);
=======

  test('applies correct styling', () => {'
    render(<SEO  />)
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
