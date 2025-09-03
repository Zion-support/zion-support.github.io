
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainSidebar from '../components/MainSidebar';


  test('renders without crashing', () => {

    render(<MainSidebar />);
    expect(screen.getByTestId('mainsidebar)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<MainSidebar />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<MainSidebar />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<MainSidebar />);
    // Add styling tests if needed;


