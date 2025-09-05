<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEO from '../components/SEO';

describe('SEO', () => {
  test('renders without crashing', () => {
    render(<SEO />);
    expect(screen.getByTestId('seo')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEO />);
    // Add specific content tests here
  });

  test('handles user interactions', () => {
    render(<SEO />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<SEO />);
    // Add styling tests here
  });
});
=======
import _React from 'react"  import '@testing-library/jest-dom import SEO from '../components/SEO" describe('SEO',() => {' test('renders without crashing',() => {' render(<SEO / />) expect(screen.getByTestId("seo")).toBeInTheDocument();' }) test('displays correct content',() => {' render(<SEO / />) }) test('handles user interactions',() => {' render(<SEO / />) }) test('applies correct styling',() => {' render(<SEO / />) }) })
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
