import React from 'react';

interface MicroSAASCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ className = '', children }) => {
  return (
    <div className={`microsaascard ${className}`}>
      {children}
    </div>
  );
};

export default MicroSAASCard;