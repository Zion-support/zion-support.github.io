import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../components/TestimonialsSection.dynamic';

describe('TestimonialsSection', () => {
  test('renders without crashing', () => {
    render(<TestimonialsSection />);
    expect(screen.getByTestId('testimonialssection.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<TestimonialsSection />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<TestimonialsSection />);
    // Add styling tests here
  });
});