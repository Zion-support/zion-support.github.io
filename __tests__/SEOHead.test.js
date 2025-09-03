
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOHead from '../components/SEOHead';


  test('renders without crashing', () => {

    render(<SEOHead />);
    expect(screen.getByTestId('seohead)).toBeInTheDocument()});


  test('displays correct content', () => {
    render(<SEOHead />);

    // Add specific content tests based on component
  });

  test('handles user interactions', () => {

    render(<SEOHead />);
    // Add interaction tests based on component functionality});
;
  test('applies correct styling', () => {
    render(<SEOHead />);
    // Add styling tests if needed;


