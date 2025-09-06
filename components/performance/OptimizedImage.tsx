
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
interface OptimizedImageProps {
  src: string, alt: string
=======

interface OptimizedImageProps {;

  src: string, alt: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React && React.CSSProperties;
}

<<<<<<< HEAD
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src
  alt
  width
  height
  className = ''
  priority = false
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  quality = 85
  fill = false
  style

}) => {
  if (fill) {
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({;
  src,;
  alt,;
  width,;
  height,;
  className = '',;
  priority = false,;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',;
  quality = 85,;
  fill = false,;
  style;
}) => {;
  if (fill) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}
      />;
    );
  }
<<<<<<< HEAD
    <Image
=======

    <Image;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      src={src}
      alt={alt}
      width={width |800}
      height={height |600}
      className={className}
      priority={priority}
      sizes={sizes}
quality={quality}
      style={style}
  );
}
export default OptimizedImage;