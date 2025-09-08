
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


interface OptimizedImageProps {;

  src: string, alt: string,;

import Image from 'next / image';
;
interface OptimizedImageProps {
  src: string, alt: string,
import Image from 'next / image';
;
interface OptimizedImageProps {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

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

  src,
  alt,
  width,
  height,
  class_name = '',
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}) => {
  // Check condition
if ( {) {
  $2
}
    return (
      <Image;
        src={src}
        alt={alt}
        fill;
        className={class_name}
        priority={priority}
        sizes={sizes}
        quality={quality}
        style={style}


    <Image;

      src={src}
      alt={alt}
      width={width |800}
      height={height |600}
      className={className}
      />);
  }
    <Image;
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={class_name}
      priority={priority}
      className={className}
      sizes={sizes}



      quality={quality}
      style={style}

quality={quality}
      style={style}
  );
}
;
export default OptimizedImage;
      quality={quality}
      style={style}

  );
};

export default OptimizedImage;
