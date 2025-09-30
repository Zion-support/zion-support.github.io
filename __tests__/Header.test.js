import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';


  test('renders without crashing', () => {

    render(<Header />);
    expect(screen.getByTestId('header)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<Header />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<Header />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<Header />);
    // Add styling tests if needed;
