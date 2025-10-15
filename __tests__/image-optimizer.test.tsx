import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageOptimizer from '../app/components/ImageOptimizer';

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    render(<ImageOptimizer src="/test.jpg" alt="Test" />);
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });
});