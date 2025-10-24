<<<<<<< HEAD
import React from 'react';

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default EnhancedSkipLink;
=======
'use client'

import React from 'react'

const EnhancedSkipLink: React.FC = () => {
  return (
    <a href="#main-content" className="enhanced-skip-link">
      Skip to main content
    </a>
  )
}

export default EnhancedSkipLink
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
