import React from 'react';

interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ className = '', children }) => {
  return (
    <div className={`content-carousel ${className}`}>
      {children}
    </div>
  );
};

export default ContentCarousel;
