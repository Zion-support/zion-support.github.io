import React from 'react';

interface AdTemplatesProps {
  className?: string;
  children?: React.ReactNode;
}

const AdTemplates: React.FC<AdTemplatesProps> = ({ className = '', children }) => {
  return (
    <div className={`adtemplates ${className}`}>
      {children}
    </div>
  );
};

export default AdTemplates;