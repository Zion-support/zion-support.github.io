
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import _app from '../pages/_app';


  test('page renders correctly', () => {

    render(<_app />);
    expect(screen.getByRole('main)).toBeInTheDocument()});


  test('navigation works', () => {
    render(<_app />);

    // Test navigation elements
  });

  test('page content is accessible', () => {

    render(<_app />);
    // Test accessibility features});
;
  test('page loads with correct data', () => {
    render(<_app />);
    // Test data loading and display;


