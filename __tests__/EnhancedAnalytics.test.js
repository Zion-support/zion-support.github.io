
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedAnalytics from '../components/EnhancedAnalytics';


  test('renders without crashing', () => {

    render(<EnhancedAnalytics />);
    expect(screen.getByTestId('enhancedanalytics)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<EnhancedAnalytics />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<EnhancedAnalytics />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<EnhancedAnalytics />);
    // Add styling tests if needed;


