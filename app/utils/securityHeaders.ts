import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const securityHeaders.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`securityheaders.ts ${className}`}>
      {children}
    </div>
  );
};

export default securityHeaders.ts;