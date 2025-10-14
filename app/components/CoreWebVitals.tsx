import React from 'react';

interface CoreWebVitalsProps {
  className?: string;
  children?: React.ReactNode;
}

const CoreWebVitals: React.FC<CoreWebVitalsProps> = ({ className = '', children }) => {
  return (
    <div className={`corewebvitals ${className}`}>
      {children}
    </div>
  );
};

export default CoreWebVitals;