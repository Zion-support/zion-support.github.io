'use client';
import React from 'react'
'use client'
import React, { useState, useCallback } from 'react'
interface ImageProps {
    src: string,
    alt: string
  }
interface ImageProps {}

  src: string;
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  _quality?: number,
  src: string,
  alt: string,
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  _quality?: number;
  _placeholder?: 'blur' | 'empty';
  _blurDataURL?: string;
  fill?: boolean;
  sizes?: string
  style?: React.CSSProperties
  onLoad?: () => void
  onError?: () => void;}
}
export const Image: React.FC<ImageProps>= ({}
export const Image: React.FC<ImageProps> = ({}
  src,
export const Image: React.FC<ImageProps> = ({
    ,
  src;
  }, [onLoad]);
  const handleError = useCallback(() => {/* TODO: Fix JSX expression */}
  }, [onError]);
  const,
  );
};

export default Image;

"`;
