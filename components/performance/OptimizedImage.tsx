<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from 'react';


interface OptimizedImageProps {;
  src: string, alt: string,;

<<<<<<< HEAD
  );
};

export default OptimizedImage;
      quality={quality}
      style={style}

  );
};

export default OptimizedImage;
import Image from 'next / image';
;

import React from \"react\";"
import Image from \"next/image\";

export default OptimizedImage;
      quality={quality}
      style={style}

  );
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
export default OptimizedImage;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import Image from next / image';



interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt;
  width;
  height;
  priority = false;
  className;
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

import React from "react";
import Image from "next/image";
import Image from 'next / image';
;
import React from "react;
import Image from next/image";



import React from "react";
import Image from "next/image";
import React from "react";
import Image from "next/image";

import React from \"react\";"

import React from \"react\;
import Image from \"next/image\";
=======
<<<<<<< HEAD

interface OptimizedImageProps {;
  src: string, alt: string,;

export default OptimizedImage;

  );
};

export default OptimizedImage;
>>>>>>> origin/chore/fix-lint-and-merge

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

<<<<<<< HEAD

const OptimizedImage: React.FC<OptimizedImageProps> = ({
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  src,
  alt,
  width,
  height,
<<<<<<< HEAD
<<<<<<< HEAD
  className = "",
=======
class_name = '',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  priority = false,
  quality = 75,
  sizes = "100vw","
}) => {
=======
>>>>>>> origin/chore/fix-lint-and-merge

}
<<<<<<< HEAD
  height}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  return (
    <Image
      src={src}
  priority?: boolean;
  quality?: number;
  sizes?: string;}
}
=======
    <Image;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


}) => {
  return (
    <Image
      src={src}

 ;
  return (}
    <Image;}
}) => {
  return (
    <Image
      src={src}
  return (}
    <Image;}
src={src}

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      src={src}

>>>>>>> origin/chore/fix-lint-and-merge
      alt={alt}
      width={width}
      height={height}
      className={className}
<<<<<<< HEAD
=======
      />);
  }
    <Image;
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={class_name}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      priority={priority}
<<<<<<< HEAD
      className={className}
      sizes={sizes}
      quality={85}
      sizes={sizes}
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      quality={quality}
      style={style}

quality={quality}
      style={style}
  );
}
      quality={quality}
      sizes={sizes}
    />
  );
}
};

export default OptimizedImage;
export default OptimizedImage;
      sizes={sizes}
      quality={quality}
=======

      sizes={sizes}
      quality={quality}

>>>>>>> origin/chore/fix-lint-and-merge
    />
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default OptimizedImage;
"
export default OptimizedImage;
'
export default OptimizedImage;
      sizes={sizes}
      quality={quality}
    />
  );
}



export default OptimizedImage;

  )
}
export default OptimizedImage;
"
export default OptimizedImage;
=======
export default OptimizedImage;
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
