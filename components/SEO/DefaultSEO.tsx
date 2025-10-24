import React from 'react';

interface DefaultSEOProps {
  className?: string;
  children?: React.ReactNode;
}

export const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '', children }) => {
  return (
    <div className={`defaultseo ${className}`}>
      {children}
    </div>
  );
};

export default DefaultSEO;