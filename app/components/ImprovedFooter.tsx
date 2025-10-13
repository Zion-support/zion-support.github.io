import React from 'react';

interface ImprovedFooterProps {
  children?: React.ReactNode;
}

const ImprovedFooter: React.FC<ImprovedFooterProps> = ({ children }) => {
  return (
    <div className="improvedfooter">
      {children}
    </div>
  );
};

export default ImprovedFooter;