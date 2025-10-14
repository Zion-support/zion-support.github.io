'use client';
import React from 'react';

interface ContentCarouselProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ContentCarousel({ children, className = '' }: ContentCarouselProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}