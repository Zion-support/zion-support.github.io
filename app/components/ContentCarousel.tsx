import React from 'react';

interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

export const ContentCarousel: React.FC<ContentCarouselProps> = ({ className = '', children }) => {
  return (
    <div className={`contentcarousel ${className}`}>
      {children}
    </div>
  );
};

export default ContentCarousel;