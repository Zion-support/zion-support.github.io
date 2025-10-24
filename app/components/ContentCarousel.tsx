<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ContentCarouselProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ContentCarousel: React.FC<ContentCarouselProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ContentCarousel;
=======

const ContentCarousel: React.FC<ContentCarouselProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'contentcarousel ' + className}>
      {children || <p>ContentCarousel component</p>}
    </div>
  );
};

export default ContentCarousel;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
