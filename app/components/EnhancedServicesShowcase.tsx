import React from 'react';

interface EnhancedServicesShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = ({ className = '', children }) => {
  return (
    <div className={`enhanced-services-showcase ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedServicesShowcase;
