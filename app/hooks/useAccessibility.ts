import React from 'react';

interface useAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

const useAccessibility: React.FC<useAccessibilityProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`useaccessibility ${className}`}>
      {children}
    </div>
  );
};

export default useAccessibility;