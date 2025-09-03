<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainSidebar from '../components/MainSidebar';
<<<<<<< HEAD
  describe('MainSidebar', () => {
=======

describe('MainSidebar', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<MainSidebar />);
    expect(screen.getByTestId('mainsidebar')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<MainSidebar />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import MainSidebar   from '../components/MainSidebar''
  describe('MainSidebar', () => {'
  test('renders without crashing', () => {'
    render(<MainSidebar  />)
    expect(screen.getByTestId('mainsidebar')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<MainSidebar  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<MainSidebar />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<MainSidebar />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<MainSidebar  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<MainSidebar  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
