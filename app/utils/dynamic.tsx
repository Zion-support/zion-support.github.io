import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const dynamic: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`dynamic ${className}`}>
      {children}
    </div>
  );
};

export default dynamic;