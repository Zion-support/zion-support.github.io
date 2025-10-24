<<<<<<< HEAD
import React from 'react'
"use client"
interface MetaTagsProps {
  className?: string
}
const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>MetaTags</h2>
      <p>This component is under construction.</p>
    </div>
  )
};
export default MetaTags
=======
import React from 'react';

interface MetaTagsProps {
  className?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Meta tags component content */}
    </div>
  );
};

export default MetaTags;
>>>>>>> origin/main
