import React from 'react';

interface MetaTagsProps {
  className?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* MetaTags component */}
    </div>
  );
};

export default MetaTags;