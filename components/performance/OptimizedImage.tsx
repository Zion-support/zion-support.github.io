<<<<<<< HEAD
interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

import React from "react";
import Image from "next/image";
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';

<<<<<<< HEAD

import React from "react";
import Image from "next/image";
import React from "react";
import Image from "next/image";

=======

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

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
  }
  "src": string;
  "alt": string;
  "width": number;
  "height": number;
=======
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



<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
interface OptimizedImageProps {
  src: string, alt: string,
export default OptimizedImage
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

const "OptimizedImage": React.FC<OptimizedImageProps> = ({
  }
=======

import React from "react";
import Image from "next/image";
import React from 'react';
import Image from 'next/image';


import React from "react";
import Image from "next/image";
import React from "react";
import Image from "next/image";

import React from \"react\";"

<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  className?: string;
interface OptimizedImageProps {}
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}
<<<<<<< HEAD

=======

<<<<<<< HEAD
<<<<<<< HEAD

const OptimizedImage: React.FC<OptimizedImageProps> = ({
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
const OptimizedImage: React.FC < OptimizedImageProps> = ({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const "OptimizedImage": React.FC<OptimizedImageProps> = ({
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
  src,
const "OptimizedImage": React.FC<OptimizedImageProps> = ({ src,;
  }
  alt,
  width,
  height,
<<<<<<< HEAD
  className = "","
=======
<<<<<<< HEAD
<<<<<<< HEAD
  className = "",
=======
class_name = '',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  priority = false,
  quality = 75,
  sizes = "100vw","
}) => {
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> merged-prs-20250907-203621
  // Check condition
if ( {) {
  $2
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  priority = false,'
  sizes = '(max - width: 768px) 100vw, (max - width: 1200px) 50vw, 33vw',
  quality = 85,
  fill = false,
  style;
}) => {}
  // Check condition;
if ( {) {}
  $2;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
=======
}
<<<<<<< HEAD
  height}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  return (
    <Image
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
  return (
    <Image
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
>>>>>>> merged-prs-20250907-203621
      src={src}
=======
  priority?: boolean;
  quality?: number;
  sizes?: string;}
}
=======
    <Image;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339



 ;
  return (}
    <Image;}
src={src}
<<<<<<< HEAD
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}

      sizes={sizes}
=======

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      src={src}

>>>>>>> origin/chore/fix-lint-and-merge
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      sizes={sizes}
<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      quality={quality}
      style={style}

>>>>>>> merged-prs-20250907-203621
quality={quality}
      style={style}
  );
}
export default OptimizedImage;
  );
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
export default OptimizedImage;
"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default OptimizedImage;
'
  )
};

export default OptimizedImage;
<<<<<<< HEAD
"
export default OptimizedImage;
=======
export default OptimizedImage;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
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
=======
      className={className}
      priority={priority}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
