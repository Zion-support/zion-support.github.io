<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import services from '../pages/services';
<<<<<<< HEAD
  describe('services Integration Tests', () => {
=======

describe('services Integration Tests', () => {
>>>>>>> main
  test('page renders correctly', () => {
    render(<services />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

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
;
  test('page content is accessible', () => {
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

  test('page loads with correct data', () => {'
    render(<services  />)
    // Test data loading and display
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
