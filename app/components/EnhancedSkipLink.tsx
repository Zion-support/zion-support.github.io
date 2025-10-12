import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface EnhancedSkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedSkipLink;
