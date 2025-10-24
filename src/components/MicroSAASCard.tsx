import React from 'react';

interface MicroSAASCardProps {
  className?: string;
  children?: React.ReactNode;
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default MicroSAASCard;
