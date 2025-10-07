import React, { memo } from 'react';

const ContentShowcase: React.FC = memo(() => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-8'>
      <h2 className='text-2xl font-bold mb-4'>Content Showcase</h2>
      <p className='text-gray-600'>
        Showcasing our latest content and innovations.
      </p>
    </div>
  );
});

ContentShowcase.displayName = 'ContentShowcase';

export default ContentShowcase;
