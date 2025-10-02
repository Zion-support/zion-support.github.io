import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveElements from '../components/InteractiveElements';


  test('renders without crashing', () => {

    render(<InteractiveElements />);
    expect(screen.getByTestId('interactiveelements)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<InteractiveElements />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<InteractiveElements />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<InteractiveElements />);
    // Add styling tests if needed;
