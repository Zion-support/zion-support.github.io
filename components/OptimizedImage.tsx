<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback } from 'react';
=======
>>>>>>> origin/resolved-merge-conflicts
import React from 'react';
import Image from 'next/image';
interface OptimizedImageProps {
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
import React from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  quality = 75,
}) => {
import React from 'react'
import Image from 'next/image'
interface OptimizedImageProps {

  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
'use client, ';''''
  'import Image from 'next/image
  ';interface OptimizedImageProps {'
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  onClick?: () => void
  onLoad?: () => void
  onError?: () => void
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

const OptimizedImage: React.FC<OptimizedImageProps> = ({

}) => {

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      placeholder='blur'
      blurDataURL='data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
    />
  );
};
export default OptimizedImage;


<<<<<<< HEAD
  )
}
export default OptimizedImage
      quality={quality}'
      placeholder='blur''
      blurDataURL='data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
    />
  )
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
return (
    <Image,
  src={src}
      alt={alt}
      width={width}
      height={height}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
=======
  src, alt,
  width, height,
  className = '', priority = false,
  quality = 75, placeholder = 'empty',
  blurDataURL, sizes,
  fill = false, style,
  onClick, onLoad,
  onError
}) => {
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 09b7f5b76b3a513eae3b15ab3d3ff5712b092513
=======
<<<<<<< HEAD
export default OptimizedImage;
      placeholder="blur"
      blurDataURL="data:image/jpeg,base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>  );
>>>>>>> origin/resolved-merge-conflicts
}
export default OptimizedImage;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OptimizedImage;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-88b9
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
