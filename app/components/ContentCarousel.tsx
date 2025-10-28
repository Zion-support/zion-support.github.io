'use client';

import React, { memo } from 'react';

interface ContentCarouselProps {
  items: React.ReactNode[];
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = memo(({ 
  items, 
  className = '' 
}) => {
  return (
    <div className={`content-carousel ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          {item}
        </div>
      ))}
    </div>
  );
});

ContentCarousel.displayName = 'ContentCarousel';

export default ContentCarousel;