
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';


  test('renders without crashing', () => {

    render(<Card />);
    expect(screen.getByTestId('card)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<Card />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<Card />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<Card />);
    // Add styling tests if needed;


