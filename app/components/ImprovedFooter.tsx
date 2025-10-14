import React from 'react';

interface ImprovedFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const ImprovedFooter: React.FC<ImprovedFooterProps> = ({ className = '', children }) => {
  return (
    <div className={`improvedfooter ${className}`}>
      {children}
    </div>
  );
};

export default ImprovedFooter;