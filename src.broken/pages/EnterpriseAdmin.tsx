import React from 'react';

interface EnterpriseAdminProps {
  className?: string;
}

const EnterpriseAdmin: React.FC<EnterpriseAdminProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseAdmin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterpriseAdmin;