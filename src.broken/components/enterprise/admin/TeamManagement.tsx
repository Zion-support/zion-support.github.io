import React from 'react';

interface TeamManagementProps {
  className?: string;
}

const TeamManagement: React.FC<TeamManagementProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TeamManagement</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TeamManagement;