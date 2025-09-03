
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PerformanceMonitor from '../components/PerformanceMonitor';


  test('renders without crashing', () => {

    render(<PerformanceMonitor />);
    expect(screen.getByTestId('performancemonitor)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<PerformanceMonitor />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<PerformanceMonitor />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<PerformanceMonitor />);
    // Add styling tests if needed;


