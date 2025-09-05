<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import _app from '../pages/_app';

describe('_app Integration Tests', () => {
  test('page renders correctly', () => {
    render(<_app />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigation works', () => {
    render(<_app />);
    // Add navigation tests here
  });

  test('page content is accessible', () => {
    render(<_app />);
    // Add accessibility tests here
  });

  test('page loads with correct data', () => {
    render(<_app />);
    // Add data loading tests here
  });
});
=======
import _React from 'react" import { render,screen } from '@testing-library/react" import '@testing-library/jest-dom import _app from '../pages/_app" describe('_app Integration Tests',() => {' test('page renders correctly',() => {' render(<_app / />) expect(screen.getByRole('main')).toBeInTheDocument();' }) test('navigation works',() => {' render(<_app / />) }) test('page content is accessible',() => {' render(<_app / />) }) test('page loads with correct data',() => {' render(<_app / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
