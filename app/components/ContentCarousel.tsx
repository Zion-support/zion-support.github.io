'use client'
import React from 'react';

const ContentCarousel: React.FC = React.memo((props) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Featured Content</h2>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </div>
  );
});

export default ContentCarousel;