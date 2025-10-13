import React from 'react';
import { render, screen } from '@testing-library/react';
import OptimizedImage from '../../app/components/OptimizedImage';
// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    img: ({ children, ...props }: any) => <img {...props}>{children}</img>,
  },
}));
const mockProps = {
  src: 'https://example.com/test.jpg',
  alt: 'Test image',
};
describe('OptimizedImage Component', () => {
  it('renders with default props', () => {
    render(<OptimizedImage {...mockProps} />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/test.jpg');
  });
  it('renders with custom className', () => {
    render(<OptimizedImage {...mockProps} className="custom-class" />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    // The className is applied to the wrapper div, not the img element
    const wrapper = image.closest('div');
    expect(wrapper).toHaveClass('custom-class');
  });
});
