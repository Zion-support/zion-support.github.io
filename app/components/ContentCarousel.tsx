"use client";
import React from 'react';

interface ContentCarouselProps {
  className?: string;
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        ContentCarousel
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default ContentCarousel;