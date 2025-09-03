
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImage from '../components/OptimizedImage';


  test('renders without crashing', () => {

    render(<OptimizedImage />);
    expect(screen.getByTestId('optimizedimage)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<OptimizedImage />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<OptimizedImage />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<OptimizedImage />);
    // Add styling tests if needed;


