import React from 'react'

interface MetaTagsProps {
  className?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Meta Tags component */}
    </div>
  );
};

export default MetaTags;