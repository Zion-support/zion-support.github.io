import React from 'react';

interface ContentcarouselProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Contentcarousel({ className = '', children }: ContentcarouselProps) {
  return (
    <div className={`ContentCarousel-component ${className}`}>
      {children}
    </div>
  );
}