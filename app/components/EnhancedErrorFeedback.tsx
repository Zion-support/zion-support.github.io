import React from 'react';

interface EnhancedErrorFeedbackProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedErrorFeedback: React.FC<EnhancedErrorFeedbackProps> = ({ className = '', children }) => {
  return (
    <div className={`enhancederrorfeedback ${className}`}>
      {children}
    </div>
  );
};

export default EnhancedErrorFeedback;