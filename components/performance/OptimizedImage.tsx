
import React from 'react;


interface OptimizedImageProps {
  src: string, alt: string,

=======
  );
}

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
}

export default OptimizedImage;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
import Image from next / image';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

>>>>>>> origin/main

=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
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
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React from "react;
import Image from next/image";
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import React from "react;
import Image from next/image";
=======
import React from "react;
import Image from next/image";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React from \"react\;
import Image from \"next/image\";

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

=======

const OptimizedImage: React.FC<OptimizedImageProps> = ({
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  src,
  alt,
  width,
  height}
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
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  return (
    <Image
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      src={src}
=======
  priority?: boolean;
  quality?: number;
  sizes?: string;}
}


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}) => {
  return (
    <Image
      src={src}
  return (}
    <Image;}
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
src={src}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      alt={alt}
      width={width}
      height={height}

      priority={priority}

      sizes={sizes}
      quality={quality}

=======
}

export default OptimizedImage;

>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export default OptimizedImage;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
      sizes={sizes}
      quality={quality}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    />
  );
}


=======

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
export default OptimizedImage;

=======
  )
}
export default OptimizedImage;
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
