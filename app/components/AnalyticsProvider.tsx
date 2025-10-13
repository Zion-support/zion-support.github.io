import React from 'react';
interface AnalyticsproviderProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {
  return()
    <div className={`analyticsprovider-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}