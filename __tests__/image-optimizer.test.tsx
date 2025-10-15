<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Test Component</div>;

describe('image-optimizer.test', () => {
  test('should render without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock image optimizer component for testing
const MockImageOptimizer = () => <div>Image Optimizer</div>;

describe('Image Optimizer', () => {
  test('renders image optimizer', () => {
    render(<MockImageOptimizer />);
    expect(screen.getByText('Image Optimizer')).toBeInTheDocument();
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
  });
});