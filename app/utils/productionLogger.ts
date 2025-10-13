import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const productionLogger.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`productionlogger.ts ${className}`}>
      {children}
    </div>
  );
};

export default productionLogger.ts;