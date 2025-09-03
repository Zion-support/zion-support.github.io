
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';


  test('renders without crashing', () => {

    render(<SEO />);
    expect(screen.getByTestId('seo)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<SEO />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<SEO />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests if needed;


