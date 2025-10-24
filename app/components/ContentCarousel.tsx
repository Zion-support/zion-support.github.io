import React from 'react';

interface ContentCarouselProps {
  children: React.ReactNode;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ContentCarousel;