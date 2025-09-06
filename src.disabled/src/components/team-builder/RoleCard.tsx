import React from 'react';

interface RoleCardProps {
  className?: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RoleCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RoleCard;