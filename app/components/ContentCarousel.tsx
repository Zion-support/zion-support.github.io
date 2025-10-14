import React from 'react';

interface ContentCarouselProps {
  children: React.ReactNode;
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ children, className = '' }) => {
  return (
    <div className={`content-carousel ${className}`}>
      {children}
    </div>
  );
};

export default ContentCarousel;