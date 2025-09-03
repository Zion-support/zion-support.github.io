<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import sitemap from '../pages/sitemap;

describe('sitemap Integration Tests', () => {
  test(page renders correctly', () => {
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sitemap from '../pages/sitemap';
<<<<<<< HEAD
'
describe('sitemap Integration Tests', () => {'
=======
<<<<<<< HEAD
  describe('sitemap Integration Tests', () => {
=======

describe('sitemap Integration Tests', () => {
>>>>>>> main
>>>>>>> main
  test('page renders correctly', () => {
>>>>>>> main
    render(<sitemap />);
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
    render(<sitemap />);
=======
import React   from 'react''
import { render, screen }   from '@testing-library/react''
import '@testing-library/jest-dom
import sitemap   from '../pages/sitemap''
  describe('sitemap Integration Tests', () => {'
  test('page renders correctly', () => {'
    render(<sitemap  />)
    expect(screen.getByRole('main')).toBeInTheDocument();'
  })

  test('navigation works', () => {'
    render(<sitemap  />)
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
    render(<sitemap />);
    // Test accessibility features;
  });
;
  test('page loads with correct data', () => {
    render(<sitemap />);
    // Test data loading and display;
=======

  test('page content is accessible', () => {'
    render(<sitemap  />)
    // Test accessibility features
  });
<<<<<<< HEAD
'
  test('page loads with correct data', () => {
    render(<sitemap />);
=======

  test('page loads with correct data', () => {'
    render(<sitemap  />)
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
