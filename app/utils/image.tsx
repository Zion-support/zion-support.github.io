  width?: number
  height?: number
  className?: string
  priority?: boolean
  _quality?: number
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  priority?: boolean,
  _quality?: number,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  _placeholder?: 'blur' | 'empty'
  _blurDataURL?: string,
  fill?: boolean,
  sizes?: string,
  style?: React.CSSProperties,
  onLoad?: () => void,
  onError?: () => void;}
}
  src,
export const Image: React.FC<ImageProps> = ({
  src,
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
}) => {}
const [, setIsLoaded] = useState(false)
const [hasError, setHasError] = useState(false)
const handleLoad = useCallback(() => {}
    setIsLoaded(true)
    if (onLoad) onLoad();}
  }, [onLoad])
const handleError = useCallback(() => {}
    setHasError(true)
    if (onError) onError();}
  }, [onError])
      width: '100%',
      height: '100%',
      objectFit: 'cover'}
    })
  }
      <div}
  if (hasError) {
    return(<div}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
'use client',
import React, { useState, useCallback } from 'react',
interface ImageProps {/* TODO: Fix JSX expression */}
}
export const,
  Image: React.FC<ImageProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
  }, [onLoad]),
const handleError = useCallback(() => {/* TODO: Fix JSX expression */}
  }, [onError]),
  const,
  imageStyle: React.CSSProperties = {/* TODO: Fix JSX expression */}
    })
  },
  if (hasError) {/* TODO: Fix JSX expression */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={imageStyle}
  }
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      sizes={sizes}
    />)
  ),
},
export default Image,
"`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
