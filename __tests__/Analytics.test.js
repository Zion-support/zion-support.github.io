
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Analytics from '../components/Analytics';


  test('renders without crashing', () => {

    render(<Analytics />);
    expect(screen.getByTestId('analytics)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<Analytics />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<Analytics />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<Analytics />);
    // Add styling tests if needed;


