import Image from &apos;next/image';
import { useState } from &apos;react';

interface OptimizedImageProps {
  src: string;
  al,t: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number}&apos;&apos;

export default function OptimizedImage(;{
  src,
  alt,
  width = 800,
  height = 600,
  className = &apos;&apos;,
  priority = false,
  quality = 75
}: OptimizedImageProps) {&apos;}&apos;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (}
        <div className=&quot;absolute inset-0 bg-gray-200 animate-pulse&quot; />
      )}&quot;
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`transition-opacity duration-300 ${isLoading ? &apos;opacity-0&apos; : &apos;opacity-100&apos;}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false)}}
        placeholder=&quot;blur&quot;
        blurDataURL=&quot;data:image/jpegbase64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=&quot;
      />
      {hasError && (&quot;}
        <div className=&quot;absolute inset-0 flex items-center justify-center bg-gray-100&quot;>&quot;"
          <span className=&quot;text-gray-500&quot;>Failed to load image&quot;</span>
        </div>
      )}
    </div>
  )}