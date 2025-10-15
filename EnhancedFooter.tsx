import React from 'react';

interface EnhancedFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedFooter: React.FC<EnhancedFooterProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`enhancedfooter ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedFooter;