'use client'
import React, { useState, useCallback } from 'react'
interface ImageProps {
<<<<<<< HEAD
  src: string,
    alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  _quality?: number
=======
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  _quality?: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  _placeholder?: 'blur' | 'empty'
  _blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;}
}
<<<<<<< HEAD
export const Image: React.FC<ImageProps>= ({
  src,
=======
export const Image: React.FC<ImageProps> = ({,
  src;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  style,
  onLoad,
  onError,
  ...props}
}) => {
  const [, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    if (onLoad) onLoad();}
  }, [onLoad])
  const handleError = useCallback(() => {
    setHasError(true)
    if (onError) onError();}
  }, [onError])
  const imageStyle: React.CSSProperties = {
    ...style;
    ...(fill && {
      position: 'absolute'
      top: 0;
      left: 0;
      width: '100%',
      height: '100%',
      objectFit: 'cover'}
    })
  }
<<<<<<< HEAD
  if (hasError) {</ImageProps>
    return (</ImageProps>
      <div}
=======
  if (hasError) {
    return(<div}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={imageStyle}
<<<<<<< HEAD
        {...props})
      >)
        <span className="text-gray-500 text-sm"><span className="sr-only">Screen reader: </span>Failed to load image</span>,)
      </div>,)
    ),
=======
        {...props}
      ></div>
        <span className="text-gray-500 text-sm"></span><span className="sr-only">Screen reader: </span>Failed to load image</span>
      </div>
    )
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
  }
  return(<img;
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      sizes={sizes}
<<<<<<< HEAD
      loading={priority ? 'eager' : 'lazy'}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    >)</img>
}</img>
export default Image</img>
=======
      loading={priority ? 'eager' : 'lazy'})
      onLoad={handleLoad})
      onError={handleError})
      {...props})
    />)
  )
}
export default Image;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
