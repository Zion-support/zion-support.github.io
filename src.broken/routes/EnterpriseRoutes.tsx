import React from 'react';

interface EnterpriseRoutesProps {
  className?: string;
}

const EnterpriseRoutes: React.FC<EnterpriseRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterpriseRoutes;