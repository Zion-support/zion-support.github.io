import React from 'react';
interface ErrorhandlerProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
  return()
    <div className={`errorhandler-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}