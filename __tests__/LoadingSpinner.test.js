
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../components/LoadingSpinner';


  test('renders without crashing', () => {

    render(<LoadingSpinner />);
    expect(screen.getByTestId('loadingspinner)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<LoadingSpinner />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<LoadingSpinner />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<LoadingSpinner />);
    // Add styling tests if needed;


