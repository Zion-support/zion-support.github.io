import React from 'react';
interface SeoheadProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Seohead({ className = '', children, ...props }: SeoheadProps) {
  return()
    <div className={`seohead-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}