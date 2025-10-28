import React from 'react';

interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ className = '', children }) => {
  return (
    <div className={`contentcarousel-component ${className}`}>
      {children}
    </div>
  );
};

ContentCarousel.displayName = 'ContentCarousel';

export default ContentCarousel;
