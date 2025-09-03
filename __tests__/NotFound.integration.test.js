<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import NotFound from '../pages/NotFound;

describe('NotFound Integration Tests', () => {
  test(page renders correctly', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../pages/NotFound';
<<<<<<< HEAD
'
describe('NotFound Integration Tests', () => {'
=======
<<<<<<< HEAD
  describe('NotFound Integration Tests', () => {
=======

describe('NotFound Integration Tests', () => {
>>>>>>> main
>>>>>>> main
  test('page renders correctly', () => {
>>>>>>> main
    render(<NotFound />);
    expect(screen.getByRole('main)).toBeInTheDocument();
  });
<<<<<<< HEAD
'
=======
<<<<<<< HEAD
;
=======

>>>>>>> main
>>>>>>> main
  test('navigation works', () => {
    render(<NotFound />);
=======
import React   from 'react''
import { render, screen }   from '@testing-library/react''
import '@testing-library/jest-dom
import NotFound   from '../pages/NotFound''
  describe('NotFound Integration Tests', () => {'
  test('page renders correctly', () => {'
    render(<NotFound  />)
    expect(screen.getByRole('main')).toBeInTheDocument();'
  })

  test('navigation works', () => {'
    render(<NotFound  />)
>>>>>>> main
    // Test navigation elements
  });
<<<<<<< HEAD
'
=======
<<<<<<< HEAD

  test(page content is accessible', () => {
=======
<<<<<<< HEAD
;
>>>>>>> main
  test('page content is accessible', () => {
>>>>>>> main
    render(<NotFound />);
    // Test accessibility features;
  });
;
  test('page loads with correct data', () => {
    render(<NotFound />);
    // Test data loading and display;
=======

  test('page content is accessible', () => {'
    render(<NotFound  />)
    // Test accessibility features
  });
<<<<<<< HEAD
'
  test('page loads with correct data', () => {
    render(<NotFound />);
=======

  test('page loads with correct data', () => {'
    render(<NotFound  />)
>>>>>>> main
    // Test data loading and display
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
