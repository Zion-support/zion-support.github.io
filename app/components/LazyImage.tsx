import React, { useState, useRef, useEffect } from 'react';
import { lazy } from 'react';
import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
interface LazyimageProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Lazyimage({ className = '', children, ...props }: LazyimageProps) {
  return (
    <div className={`lazyimage-component ${className}`} {...props}>
      {children}
    </div>
  );
}