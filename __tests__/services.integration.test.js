
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import services from '../pages/services';


  test('page renders correctly', () => {

    render(<services />);
    expect(screen.getByRole('main)).toBeInTheDocument()});


  test('navigation works', () => {
    render(<services />);

    // Test navigation elements
  });

  test('page content is accessible', () => {

    render(<services />);
    // Test accessibility features});
;
  test('page loads with correct data', () => {
    render(<services />);
    // Test data loading and display;


