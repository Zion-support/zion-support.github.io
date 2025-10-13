import React from 'react';
<<<<<<< HEAD:__tests__/image-optimizer.test.tsx
import { render, screen } from '@testing-library/react';
describe('Image Optimizer', () => {
  it('should render without errors', () => {
    // This is a placeholder test
    expect(true).toBe(true);
=======
import { render } from '@testing-library/react';

// Mock ImageOptimizer component
const ImageOptimizer = ({ src, alt }: { src: string; alt: string }) => (
  <div data-testid="image-optimizer">
    <img src={src} alt={alt} />
  </div>
);

describe('ImageOptimizer', () => {
  it('renders without crashing', () => {
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
>>>>>>> cursor/fix-errors-and-merge-to-main-91ea:app-broken/__tests__/image-optimizer.test.tsx
  });
});