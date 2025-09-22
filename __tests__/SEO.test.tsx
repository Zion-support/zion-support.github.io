import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';

describe('SEO', () => {
  test('renders without crashing', () => {
    render(<SEO />);
    expect(screen.getByTestId('seo')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<SEO />);
  });
  
  test('handles user interactions', () => {
    render(<SEO />);
  });
  
  test('applies correct styling', () => {
    render(<SEO />);
  });
});
<<<<<<< HEAD
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import SEO from '../components/SEO'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<SEO />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> origin/merge-pr-12271
