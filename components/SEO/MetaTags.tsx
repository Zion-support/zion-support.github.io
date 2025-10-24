'use client';
import React from 'react';

interface MetaTagsProps {
  className?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>MetaTags</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default MetaTags;
