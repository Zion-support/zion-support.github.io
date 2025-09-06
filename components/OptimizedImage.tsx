
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
<<<<<<< HEAD
import Image from 'next/image';
<<<<<<< HEAD
=======
import Image from 'next / image';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface OptimizedImageProps {
  src: string
  alt: string
=======

interface OptimizedImageProps {;
  src: string,;
  alt: string,;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
<<<<<<< HEAD
<<<<<<< HEAD
const OptimizedImage: React.FC<OptimizedImageProps> = ({
=======

const OptimizedImage: React.FC<OptimizedImageProps> = ({;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  src;
  alt;

  width = 800;
  height = 600;
  class_name = '';
  priority = false;
<<<<<<< HEAD
  quality = 75

}) => {
=======
  quality = 75,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Image;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={class_name}
      priority={priority}
      quality={quality}
      placeholder="blur";
      blurDataURL="data:image / jpeg, base64, /9j / 4AAQSkZJRgABAQAAAQABAAD / 2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj / 2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj / wAARCAABAAEDASIAAhEBAxEB / 8QAFQABAQAAAAAAAAAAAAAAAAAAAAv / xAAUEAEAAAAAAAAAAAAAAAAAAAAA / 8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX / xAAUEQEAAAAAAAAAAAAAAAAAAAAA / 9oADAMBAAIRAxEAPwCdABmX / 9k=";
/>  );
}
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export default OptimizedImage;