<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sitemap from '../pages/Sitemap';

describe('Sitemap Integration Tests', () => {
  test('page renders correctly', () => {
    render(<Sitemap />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('navigation works', () => {
    render(<Sitemap />);
    // Add navigation tests here
  });

  test('page content is accessible', () => {
    render(<Sitemap />);
    // Add accessibility tests here
  });

  test('page loads with correct data', () => {
    render(<Sitemap />);
    // Add data loading tests here
  });
});
=======
import _React from 'react" import { render,screen } from '@testing-library/react" import '@testing-library/jest-dom import sitemap from '../pages/sitemap" describe('sitemap Integration Tests',() => {' test('page renders correctly',() => {' render(<sitemap / />) expect(screen.getByRole('main')).toBeInTheDocument();' }) test('navigation works',() => {' render(<sitemap / />) }) test('page content is accessible',() => {' render(<sitemap / />) }) test('page loads with correct data',() => {' render(<sitemap / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
