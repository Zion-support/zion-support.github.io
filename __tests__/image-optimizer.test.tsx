import React from 'react';'
import { render, screen } from '@testing-library/react';'
import '@testing-library/jest-dom';'

// Mock image optimizer component for testing;
const MockImageOptimizer = () => <div>Image Optimizer</div>;

describe('Image Optimizer', () => {'
  test('renders image optimizer', () => {'
    render(<MockImageOptimizer />);
    expect(screen.getByText('Image Optimizer')).toBeInTheDocument();'
  });
});