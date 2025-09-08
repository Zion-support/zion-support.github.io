import React from 'react';






import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});


    expect(screen.getByTestId('page-transition')).toBeInTheDocument();











describe('PageTransition', () => {

  test('renders without crashing', () => {

    render(<PageTransition />);'
    expect(screen.getByRole('main')).toBeInTheDocument();
  });'


  test('displays correct content', () => {
    render(<PageTransition />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<PageTransition />);
    // Add interaction tests based on component functionality
  });
  test('applies correct styling', () => {
    render(<PageTransition />);
    // Add styling tests if needed
  });

});



