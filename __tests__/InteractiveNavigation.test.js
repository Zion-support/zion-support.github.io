<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveNavigation from '../components/InteractiveNavigation';
<<<<<<< HEAD
  describe('InteractiveNavigation', () => {
=======

describe('InteractiveNavigation', () => {
>>>>>>> main
  test('renders without crashing', () => {
    render(<InteractiveNavigation />);
    expect(screen.getByTestId('interactivenavigation')).toBeInTheDocument();
  });
<<<<<<< HEAD
;
=======

>>>>>>> main
  test('displays correct content', () => {
    render(<InteractiveNavigation />);
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import InteractiveNavigation   from '../components/InteractiveNavigation''
  describe('InteractiveNavigation', () => {'
  test('renders without crashing', () => {'
    render(<InteractiveNavigation  />)
    expect(screen.getByTestId('interactivenavigation')).toBeInTheDocument();'
  })

  test('displays correct content', () => {'
    render(<InteractiveNavigation  />)
>>>>>>> main
    // Add specific content tests based on component
  });
<<<<<<< HEAD
;
  test('handles user interactions', () => {
    render(<InteractiveNavigation />);
    // Add interaction tests based on component functionality;
  });
;
  test('applies correct styling', () => {
    render(<InteractiveNavigation />);
    // Add styling tests if needed;
=======

  test('handles user interactions', () => {'
    render(<InteractiveNavigation  />)
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {'
    render(<InteractiveNavigation  />)
    // Add styling tests if needed
<<<<<<< HEAD
>>>>>>> main
  });
});
=======
  })
})
>>>>>>> main
