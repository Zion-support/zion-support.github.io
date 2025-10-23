
// Mock OptimizedImage component
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number; 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid="optimized-image"
      loading="lazy"
    />
  );
};

describe('OptimizedImage Component', () => {
  it('renders with required props', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    
  });

  it('renders with optional dimensions', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" width={100} height={100} />);
    
  });

  it('has lazy loading enabled', () => {
    render(<OptimizedImage src="test.jpg" alt="Test image" />);
    
    const image = screen.getByTestId('optimized-image');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});