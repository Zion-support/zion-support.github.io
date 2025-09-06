<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React from 'react';


interface OptimizedImageProps {;
  src: string, alt: string,;

=======
  );
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default OptimizedImage;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      quality={quality}
      style={style}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  );
};

export default OptimizedImage;
<<<<<<< HEAD
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import Image from 'next / image';
;
=======
import React from "react";
import Image from "next/image";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React from "react";
import Image from "next/image";
=======
<<<<<<< HEAD
import Image from 'next / image';
;
=======
import React from 'react';
import Image from 'next/image';
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}
<<<<<<< HEAD
=======

const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
<<<<<<< HEAD
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
=======
  return (
    <Image
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
<<<<<<< HEAD
      sizes={sizes}
  );
}
export default OptimizedImage;
      quality={quality}
      style={style}

quality={quality}
      style={style}
  );
}
=======
      quality={quality}
      sizes={sizes}
    />
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
};

export default OptimizedImage;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
