import React from 'react';

interface TenantsListProps {
  className?: string;
}

const TenantsList: React.FC<TenantsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TenantsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TenantsList;