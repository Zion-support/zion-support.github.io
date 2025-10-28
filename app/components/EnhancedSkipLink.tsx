import React from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedskiplink-component ${className}`}>
      {children}
    </div>
  );
};

EnhancedSkipLink.displayName = 'EnhancedSkipLink';

export default EnhancedSkipLink;
