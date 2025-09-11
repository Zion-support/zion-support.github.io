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

interface OptimizedImageProps {;
  src: string,;
  alt: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
  src: string;
  alt: string;
=======
  src: string,
  alt: string,
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

<<<<<<< HEAD

const OptimizedImage: React.FC<OptimizedImageProps> = ({;

=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
const OptimizedImage: React.FC<OptimizedImageProps> = ({
<<<<<<< HEAD
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  src;
  alt;

  width = 800;
  height = 600;
  className = '';
  priority = false;
<<<<<<< HEAD

  quality = 75,;
}) => {;

=======
>>>>>>> origin/main
  quality = 75,
}) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
;

=======      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

    />  );
};


export default OptimizedImage;
=======export default OptimizedImage;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
