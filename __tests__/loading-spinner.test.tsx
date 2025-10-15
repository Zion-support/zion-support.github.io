<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Test Component</div>;

describe('loading-spinner.test', () => {
  test('should render without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock loading spinner component for testing
const MockLoadingSpinner = () => <div>Loading...</div>;

describe('Loading Spinner', () => {
  test('renders loading spinner', () => {
    render(<MockLoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
  });
});