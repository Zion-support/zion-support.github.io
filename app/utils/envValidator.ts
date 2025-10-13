import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const envValidator.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`envvalidator.ts ${className}`}>
      {children}
    </div>
  );
};

export default envValidator.ts;