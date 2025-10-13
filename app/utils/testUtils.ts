import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const testUtils.ts: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`testutils.ts ${className}`}>
      {children}
    </div>
  );
};

export default testUtils.ts;