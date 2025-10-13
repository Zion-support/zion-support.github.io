import React from 'react';
interface LoadingProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Loading({ className = '', children, ...props }: LoadingProps) {
  return()
    <div className={`loading-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}