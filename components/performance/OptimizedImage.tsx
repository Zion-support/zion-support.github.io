<<<<<<< HEAD
import React from 'react';
interface OptimizedImageProps {;
  src: string, alt: string,;
=======

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


interface OptimizedImageProps {;
  src: string, alt: string,;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
const OptimizedImage: React.FC < OptimizedImageProps> = ({
const OptimizedImage: React.FC < OptimizedImageProps> = ({

const: OptimizedImage: React.FC<OptimizedImageProps> = ({

=======

=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      quality={quality}
      style={style}




  );
};

export default OptimizedImage;
quality={quality}
      style={style}
  );
}
;
export default OptimizedImage;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      quality={quality}
      style={style}

  );
};

export default OptimizedImage;
<<<<<<< HEAD
=======
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
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
