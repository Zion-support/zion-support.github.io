
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveStats from '../components/InteractiveStats';


  test('renders without crashing', () => {

    render(<InteractiveStats />);
    expect(screen.getByTestId('interactivestats)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<InteractiveStats />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<InteractiveStats />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<InteractiveStats />);
    // Add styling tests if needed;


