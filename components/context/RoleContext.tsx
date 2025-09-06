import React from 'react';

interface RoleContextProps {
  className?: string;
}

const RoleContext: React.FC<RoleContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoleContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoleContext;