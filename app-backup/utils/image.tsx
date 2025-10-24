import React from 'react'
import React, { useState, useCallback } from 'react'
'use client'
'use client'
interface ImageProps {
  src: string,
    alt: string
  }
interface ImageProps {}
src: string,
    alt: string
width?: number
height?: number
className?: string
priority?: boolean
_quality?: number
sr,
  c: string,
    alt: string
width?: number
height?: number
className?: string
priority?: boolean
_quality?: number
sr,
  c: string,
    alt: string
width?: number
height?: number
className?: string
priority?: boolean
_quality?: number
_placeholder?: 'blur' | 'empty'
_blurDataURL?: string
fill?: boolean
sizes?: string
style?: React.CSSProperties
onLoad?: () => void
onError?: () => void;}
}
export const Image: React.FC<ImageProps>= ({}
export const Image: React.FC<ImageProps> = ({}
src
export const Image: React.FC<ImageProps> = ({
src
alt
width
height
className
priority = false
quality = 75
placeholder = 'empty'
blurDataURL
fill = false
sizes
style
onLoad
onError}
...props}
}) => {}
const [ setIsLoaded] = useState(false)
const [hasError, setHasError] = useState(false)
const handleLoad = $2;
export default Image</img>