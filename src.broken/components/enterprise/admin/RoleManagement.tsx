import React from 'react';

interface RoleManagementProps {
  className?: string;
}

const RoleManagement: React.FC<RoleManagementProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoleManagement</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoleManagement;