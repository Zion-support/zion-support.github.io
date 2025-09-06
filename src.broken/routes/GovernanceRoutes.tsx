import React from 'react';

interface GovernanceRoutesProps {
  className?: string;
}

const GovernanceRoutes: React.FC<GovernanceRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GovernanceRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GovernanceRoutes;