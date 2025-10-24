import React from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedskiplink ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSkipLink;