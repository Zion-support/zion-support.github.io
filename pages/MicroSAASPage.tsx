import React from 'react';

interface MicroSAASPageProps {
  className?: string;
  children?: React.ReactNode;
}

const MicroSAASPage: React.FC<MicroSAASPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`microsaaspage ${className}`}>
      {children}
    </div>
  );
};

export default MicroSAASPage;