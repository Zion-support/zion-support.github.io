import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedFooter from '../components/EnhancedFooter';


  test('renders without crashing', () => {

    render(<EnhancedFooter />);
    expect(screen.getByTestId('enhancedfooter)).toBeInTheDocument()});



  test('handles user interactions', () => {

    render(<EnhancedFooter />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<EnhancedFooter />);
    // Add styling tests if needed;
