<<<<<<< HEAD
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


=======
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface OptimizedImageProps {;

  src: string, alt: string,;
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import Image from 'next / image';
;
interface OptimizedImageProps {
  src: string, alt: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
import Image from 'next / image';
;
interface OptimizedImageProps {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  style?: React && React.CSSProperties;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
const OptimizedImage: React.FC < OptimizedImageProps> = ({

const: OptimizedImage: React.FC<OptimizedImageProps> = ({

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  src,
  alt,
  width,
  height,
<<<<<<< HEAD
  class_name = '',
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  priority = false,
  sizes = '(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw',
  quality = 85,
  fill = false,
  style;
}) => {
  // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
<<<<<<< HEAD


    <Image;

=======
    <Image;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      src={src}
      alt={alt}
      width={width |800}
      height={height |600}
      className={className}
=======
      />);
  }
    <Image;
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={class_name}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      priority={priority}
      sizes={sizes}
<<<<<<< HEAD


<<<<<<< HEAD

=======
=======
=======
  );
}
export default OptimizedImage;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      quality={quality}
      style={style}

quality={quality}
      style={style}
  );
}
<<<<<<< HEAD
;
export default OptimizedImage;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      quality={quality}
      style={style}

  );
};

export default OptimizedImage;
<<<<<<< HEAD
=======
;
export default OptimizedImage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
