import React from 'react';

interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ContentCarousel({ className = '', children }: ContentCarouselProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}