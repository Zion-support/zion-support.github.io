import React from 'react';

interface MetaTagsProps {
  className?: string;
  children?: React.ReactNode;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ className = '', children }) => {
  return (
    <div className={`metatags ${className}`}>
      {children}
    </div>
  );
};

export default MetaTags;