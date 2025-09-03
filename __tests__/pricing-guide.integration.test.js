
<<<<<<< HEAD
import React from 'react;
import { render, screen } from '@testing-library/react';
import @testing-library/jest-dom';
import pricing-guide from '../pages/pricing-guide;

describe('pricing-guide Integration Tests', () => {
  test(page renders correctly', () => {
    render(<pricing-guide />);
    expect(screen.getByRole('main)).toBeInTheDocument()});
  test('navigation works', () => {
    render(<pricing-guide />);
    // Test navigation elements
  });
  test(page content is accessible', () => {
    render(<pricing-guide />);
    // Test accessibility features
=======
<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import pricing-guide from '../pages/pricing-guide';
  describe('pricing-guide Integration Tests', () => {
  test('page renders correctly', () => {
    render(<pricing-guide />);
    expect(screen.getByRole('main')).toBeInTheDocument()})';
  test('navigation works', () => {
    render(<pricing-guide />);
    // Test navigation elements;
  });
  test('page content is accessible', () => {
    render(<pricing-guide />);
    // Test accessibility features;
>>>>>>> main
  });
  test('page loads with correct data', () => {
    render(<pricing-guide />);
    // Test data loading and display;
  })});
=======
import React   from 'react''
import { render, screen }   from '@testing-library/react''
import '@testing-library/jest-dom
import pricing-guide   from '../pages/pricing-guide''
  describe('pricing-guide Integration Tests', () => {'
  test('page renders correctly', () => {'
    render(<pricing-guide  />)
    expect(screen.getByRole('main')).toBeInTheDocument()})'
  test('navigation works', () => {'
    render(<pricing-guide  />)
    // Test navigation elements
  })
  test('page content is accessible', () => {'
    render(<pricing-guide  />)
    // Test accessibility features
  })
  test('page loads with correct data', () => {'
    render(<pricing-guide  />)
    // Test data loading and display
<<<<<<< HEAD
  });
});
=======
  })})
>>>>>>> main
>>>>>>> main
