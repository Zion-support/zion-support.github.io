import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const registerServiceWorker.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`registerserviceworker.ts ${className}`}>
      {children}
    </div>
  );
};

export default registerServiceWorker.ts;