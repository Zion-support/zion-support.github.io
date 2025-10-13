import React from 'react';
interface LoadingspinnerProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingspinner({ className = '', children, ...props }: LoadingspinnerProps) {
  return()
    <div className={`loadingspinner-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}