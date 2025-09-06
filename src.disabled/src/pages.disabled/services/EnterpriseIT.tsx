import React from 'react';

interface EnterpriseITProps {
  className?: string;
}

const EnterpriseIT: React.FC<EnterpriseITProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterpriseIT</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterpriseIT;