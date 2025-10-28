import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className = '', children }) => {
  return (
<div className={`skiplink-component ${className}`}>

      {children || <h2>SkipLink</h2>}

    </div>

  );
};

SkipLink.displayName = 'SkipLink';export default SkipLink;