<<<<<<< HEAD

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

=======
<<<<<<< HEAD
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
  src: string
  alt: string
interface OptimizedImageProps {;
  src: string,;
  alt: string,;
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({;
const OptimizedImage: React.FC < OptimizedImageProps> = ({
  src;
  alt;
  width = 800;
  height = 600;
  class_name = '';
  priority = false;
  quality = 75,;
}) => {;
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
;
export default OptimizedImage;
    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
    />
  )
},

export default OptimizedImage

=======
import React from 'react';
import Image from 'next/image';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface OptimizedImageProps {
  src: string
  alt: string
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  quality = 75

}) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
<<<<<<< HEAD

;

=======
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
<<<<<<< HEAD

=======

    />  );
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default OptimizedImage;
=======
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
<<<<<<< HEAD
/>  );
}
=======
    />  );
};

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default OptimizedImage;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
