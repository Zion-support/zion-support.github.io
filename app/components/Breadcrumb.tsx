import React from 'react';
interface BreadcrumbProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
  return()
    <div className={`breadcrumb-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}