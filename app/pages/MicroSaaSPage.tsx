import React from 'react';

interface MicroSaaSPageProps {
  className?: string;
  children?: React.ReactNode;
}

const MicroSaaSPage: React.FC<MicroSaaSPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`microsaaspage ${className}`}>
      {children}
    </div>
  );
};

export default MicroSaaSPage;