import React from 'react';

interface ModernCardProps {
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernCard;