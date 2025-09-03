<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import sitemap from '../pages/sitemap';
<<<<<<< HEAD
  describe('sitemap Integration Tests', () => {
=======

describe('sitemap Integration Tests', () => {
>>>>>>> main
  test('page renders correctly', () => {
    render(<sitemap />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

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
;
  test('page content is accessible', () => {
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

  test('page loads with correct data', () => {'
    render(<sitemap  />)
    // Test data loading and display
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
