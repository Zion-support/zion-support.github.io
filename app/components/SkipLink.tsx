import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`skiplink ${className}`}>
      {children}
    </div>
  );
};

export default SkipLink;