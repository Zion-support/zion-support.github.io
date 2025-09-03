<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import _app from '../pages/_app';
<<<<<<< HEAD
  describe('_app Integration Tests', () => {
=======

describe('_app Integration Tests', () => {
>>>>>>> main
  test('page renders correctly', () => {
    render(<_app />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('navigation works', () => {
    render(<_app />);
=======
import React   from 'react''
import { render, screen }   from '@testing-library/react''
import '@testing-library/jest-dom
import _app   from '../pages/_app''
  describe('_app Integration Tests', () => {'
  test('page renders correctly', () => {'
    render(<_app  />)
    expect(screen.getByRole('main')).toBeInTheDocument();'
  })

  test('navigation works', () => {'
    render(<_app  />)
>>>>>>> main
    // Test navigation elements
  });
<<<<<<< HEAD
;
  test('page content is accessible', () => {
    render(<_app />);
    // Test accessibility features;
  });
;
  test('page loads with correct data', () => {
    render(<_app />);
    // Test data loading and display;
=======

  test('page content is accessible', () => {'
    render(<_app  />)
    // Test accessibility features
  });

  test('page loads with correct data', () => {'
    render(<_app  />)
    // Test data loading and display
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
