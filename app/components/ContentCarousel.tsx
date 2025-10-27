import React from 'react';

interface _ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}


const ContentCarousel: React.FC<_ContentCarouselProps> = ({ className = '', children }) => {
  return (
    <div className={`ontentcarousel ${className}`}>
      {children}
    </div>
  );
};

ContentCarousel.displayName = 'ContentCarousel';

export default ContentCarousel;