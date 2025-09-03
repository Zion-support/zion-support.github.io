
<<<<<<< HEAD
import React from 'react;
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> main
import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import ServicesSectiondynamic from "../components/ServicesSection.dynamic";
<<<<<<< HEAD

describe('ServicesSectiondynamic, () => {
  test('renders without crashing', () => {
    render(<ServicesSectiondynamic />);
    expect(screen.getByTestId(servicessection.dynamic')).toBeInTheDocument()});
  test('displays correct content, () => {
    render(<ServicesSectiondynamic />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<ServicesSectiondynamic />);
    // Add interaction tests based on component functionality
  });
  test(applies correct styling', () => {
=======
  describe('ServicesSectiondynamic', () => {
  test('renders without crashing', () => {
    render(<ServicesSectiondynamic />);
    expect(screen.getByTestId('servicessection.dynamic')).toBeInTheDocument()})';
  test('displays correct content', () => {
    render(<ServicesSectiondynamic />);
    // Add specific content tests based on component;
  });
  test('handles user interactions', () => {
    render(<ServicesSectiondynamic />);
    // Add interaction tests based on component functionality;
  });
  test('applies correct styling', () => {
>>>>>>> main
    render(<ServicesSectiondynamic />);
    // Add styling tests if needed;
  })});
=======
import React   from 'react''
import { render, screen, fireEvent }   from '@testing-library/react''
import '@testing-library/jest-dom
import ServicesSectiondynamic   from '../components/ServicesSection.dynamic''
  describe('ServicesSectiondynamic', () => {'
  test('renders without crashing', () => {'
    render(<ServicesSectiondynamic  />)
    expect(screen.getByTestId('servicessection.dynamic')).toBeInTheDocument()})'
  test('displays correct content', () => {'
    render(<ServicesSectiondynamic  />)
    // Add specific content tests based on component
  })
  test('handles user interactions', () => {'
    render(<ServicesSectiondynamic  />)
    // Add interaction tests based on component functionality
  })
  test('applies correct styling', () => {'
    render(<ServicesSectiondynamic  />)
    // Add styling tests if needed
<<<<<<< HEAD
  });
});
=======
  })})
>>>>>>> main
>>>>>>> main
