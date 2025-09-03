
import { cn } from '../../src/lib/utils';


interface: OptimizedImageProps {
  src: string;

  alt,
  width: = 800,
  height = 600,
  className,
  priority = false,
  quality = 85,
  placeholder = 'empty'',;
  blurDataURL,

    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}

        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}



