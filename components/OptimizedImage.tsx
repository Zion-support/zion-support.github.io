
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

import Image from 'next / image';
;

interface OptimizedImageProps {
<<<<<<< HEAD
  src: string
  alt: string
=======
<<<<<<< HEAD
  src: string;
  alt: string;
=======
  src: string,
  alt: string,
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
=======
  src;
  alt;

  width = 800;
  height = 600;
  class_name = '';
  priority = false;
<<<<<<< HEAD
  quality = 75

=======
>>>>>>> origin/main
  quality = 75,
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
}) => {
  return (
    <Image;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={class_name}
      priority={priority}
      quality={quality}

;

=======
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

    />  );
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;