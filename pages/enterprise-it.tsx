import React from 'react';

interface EnterpriseItProps {
  className?: string;
}

const EnterpriseIt: React.FC<EnterpriseItProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseIt</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterpriseIt;