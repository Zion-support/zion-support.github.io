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
import React from 'react';
import Image from 'next/image';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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


const OptimizedImage: React.FC<OptimizedImageProps> = ({;

=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  src;
  alt;

  width = 800;
  height = 600;
  class_name = '';
  priority = false;
<<<<<<< HEAD

  quality = 75,;
}) => {;

=======
  quality = 75

}) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Image;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={class_name}
      priority={priority}
      quality={quality}
<<<<<<< HEAD

;

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

    />  );
};


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
=======
export default OptimizedImage;
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>  );
}
    />  );
};

export default OptimizedImage;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
