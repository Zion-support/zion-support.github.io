import React from 'react';

interface Toggle-groupProps {
  className?: string;
}

const Toggle-group: React.FC<Toggle-groupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Toggle-group</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Toggle-group;