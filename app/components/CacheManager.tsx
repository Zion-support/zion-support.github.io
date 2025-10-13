<<<<<<< HEAD
=======

import React from 'react';

interface CachemanagerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Cachemanager({ className = '', children, ...props }: CachemanagerProps) {
  return (
    <div className={`cachemanager-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
