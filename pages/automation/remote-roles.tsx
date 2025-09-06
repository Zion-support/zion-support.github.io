import React from 'react';

interface RemoteRolesProps {
  className?: string;
}

const RemoteRoles: React.FC<RemoteRolesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RemoteRoles</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RemoteRoles;