  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: string
  sizes?: string
  quality?: number
  loading?: 'lazy' | '
  placeholder = '
  sizes = '
  loading = '
        rootMargin: '50px'
const getOptimizedSrc  = (originalSrc: string) => {if (originalSrc.startsWith('data:') || originalSrc.startsWith('blob:'
if (originalSrc.startsWith('http'
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
              width: '
              height: '
              objectFit: '
import React, { useState } from 'react'
import React, { useState, useRef, useEffect } from 'react'
  src, alt, className = ', _width, _height, priority = false, placeholder = 'data:image/svg+xml;base64, _PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'