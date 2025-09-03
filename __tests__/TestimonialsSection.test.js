
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../components/TestimonialsSection';


  test('renders without crashing', () => {

    render(<TestimonialsSection />);
    expect(screen.getByTestId('testimonialssection)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<TestimonialsSection />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<TestimonialsSection />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<TestimonialsSection />);
    // Add styling tests if needed;


