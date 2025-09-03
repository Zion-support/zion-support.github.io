
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecurityHeaders from '../components/SecurityHeaders';


  test('renders without crashing', () => {

    render(<SecurityHeaders />);
    expect(screen.getByTestId('securityheaders)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<SecurityHeaders />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<SecurityHeaders />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<SecurityHeaders />);
    // Add styling tests if needed;


