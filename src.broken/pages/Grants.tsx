import React from 'react';

interface GrantsProps {
  className?: string;
}

const Grants: React.FC<GrantsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Grants</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Grants;