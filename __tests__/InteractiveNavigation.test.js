import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InteractiveNavigation from '../components/InteractiveNavigation';


  test('renders without crashing', () => {

    render(<InteractiveNavigation />);
    expect(screen.getByTestId('interactivenavigation)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<InteractiveNavigation />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<InteractiveNavigation />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<InteractiveNavigation />);
    // Add styling tests if needed;
