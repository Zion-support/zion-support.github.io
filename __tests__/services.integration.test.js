<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Services from '../pages/Services';

describe('Services Integration Tests', () => {
  test('page renders correctly', () => {
    render(<Services />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigation works', () => {
    render(<Services />);
    // Add navigation tests here
  });

  test('page content is accessible', () => {
    render(<Services />);
    // Add accessibility tests here
  });

  test('page loads with correct data', () => {
    render(<Services />);
    // Add data loading tests here
  });
});
=======
import _React from 'react" import { render,screen } from '@testing-library/react" import '@testing-library/jest-dom import services from '../pages/services" describe('services Integration Tests',() => {' test('page renders correctly',() => {' render(<services / />) expect(screen.getByRole('main')).toBeInTheDocument();' }) test('navigation works',() => {' render(<services / />) }) test('page content is accessible',() => {' render(<services / />) }) test('page loads with correct data',() => {' render(<services / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
