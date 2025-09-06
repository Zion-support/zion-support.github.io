<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
import React from 'react';


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import React from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface OptimizedImageProps {;
  src: string, alt: string,;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Image from 'next / image';
;
interface OptimizedImageProps {
  src: string, alt: string,
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

const: OptimizedImage: React.FC<OptimizedImageProps> = ({

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  src,
  alt,
  width,
  height,
class_name = '',
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


    <Image;

=======
    <Image;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      sizes={sizes}
<<<<<<< HEAD

<<<<<<< HEAD
      quality={quality}
      style={style}

=======


=======
      quality={quality}
      style={style}




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
quality={quality}
      style={style}
<<<<<<< HEAD
  );
}
;
export default OptimizedImage;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      quality={quality}
      style={style}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  );
};

export default OptimizedImage;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
