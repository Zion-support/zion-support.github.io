import { render } from '@testing-library/react';
import ImageOptimizer from '../app/components/ImageOptimizer';
describe('ImageOptimizer', () => {
  it('renders without crashing', () => {,
    expect(() => render(<ImageOptimizer src="test.jpg" alt="test" />)).not.toThrow();
  });
});