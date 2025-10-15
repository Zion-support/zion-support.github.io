import React from 'react';

interface DigitalTransformationPageProps {
  className?: string;
  children?: React.ReactNode;
}

const DigitalTransformationPage: React.FC<DigitalTransformationPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`digitaltransformationpage ${className}`}>
      {children}
    </div>
  );
};

export default DigitalTransformationPage;