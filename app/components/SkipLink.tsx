<<<<<<< HEAD
import React from 'react';

interface SkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default SkipLink;
=======
'use client'

import React from 'react'

const SkipLink: React.FC = () => {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  )
}

export default SkipLink
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
