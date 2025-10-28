
import React from 'react';
import Link from 'next/link';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancedskiplink-component ${className}`}>
{children || <h2>EnhancedSkipLink</h2>}
    </div>
  );
};

EnhancedSkipLink.displayName = 'EnhancedSkipLink';

export default EnhancedSkipLink;