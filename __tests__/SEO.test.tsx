import React from 'react';






import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});


    expect(screen.getByTestId('seo')).toBeInTheDocument();











describe('SEO', () => {

  test('renders without crashing', () => {

    render(<SEO />);'
    expect(screen.getByRole('main')).toBeInTheDocument();
  });'


  test('displays correct content', () => {
    render(<SEO />);
    // Add specific content tests based on component
  });
  test('handles user interactions', () => {
    render(<SEO />);
    // Add interaction tests based on component functionality
  });
  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests if needed
  });

});



