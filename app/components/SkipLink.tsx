import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default SkipLink;
