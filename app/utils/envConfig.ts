import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const envConfig.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`envconfig.ts ${className}`}>
      {children}
    </div>
  );
};

export default envConfig.ts;