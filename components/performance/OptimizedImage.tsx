import React from 'react';

interface OptimizedImageProps {
<<<<<<< HEAD
  src: string  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
=======
  // Add props here as needed
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
}

export default function OptimizedImage({ }: OptimizedImageProps) {
  return (
<<<<<<< HEAD
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      quality={85}
      placeholder="blur"
blurDataURL="data: image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="    />
  )
}
export default OptimizedImage
import React from 'react' import Image from 'next/image' interface OptimizedImageProps { src: string alt: string width?: number height?: number priority?: boolean className?: string sizes?: string } export const OptimizedImage: React.FC<OptimizedImageProps> = ({ src,alt,width,height,priority = false,className = '',sizes = '(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' }) => { return ( <Image src={src} alt={alt} width={width} height={height} priority={priority} className={className} sizes={sizes} quality={85} placeholder="blur" blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R /> ) } export default OptimizedImage
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======
    <div>
      <h1>OptimizedImage</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}
>>>>>>> e4f8ef4ed9fd2ff89efca29003f713a7ba5afd67
