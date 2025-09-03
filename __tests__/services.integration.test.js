<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import services from '../pages/services;

describe('services Integration Tests', () => {
  test(page renders correctly', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import services from '../pages/services';
<<<<<<< HEAD
'
describe('services Integration Tests', () => {'
=======
<<<<<<< HEAD
  describe('services Integration Tests', () => {
=======

describe('services Integration Tests', () => {
>>>>>>> main
>>>>>>> main
  test('page renders correctly', () => {
>>>>>>> main
    render(<services />);
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
    render(<services />);
=======
import React   from 'react''
import { render, screen }   from '@testing-library/react''
import '@testing-library/jest-dom
import services   from '../pages/services''
  describe('services Integration Tests', () => {'
  test('page renders correctly', () => {'
    render(<services  />)
    expect(screen.getByRole('main')).toBeInTheDocument();'
  })

  test('navigation works', () => {'
    render(<services  />)
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
    render(<services />);
    // Test accessibility features;
  });
;
  test('page loads with correct data', () => {
    render(<services />);
    // Test data loading and display;
=======

  test('page content is accessible', () => {'
    render(<services  />)
    // Test accessibility features
  });
<<<<<<< HEAD
'
  test('page loads with correct data', () => {
    render(<services />);
=======

  test('page loads with correct data', () => {'
    render(<services  />)
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
