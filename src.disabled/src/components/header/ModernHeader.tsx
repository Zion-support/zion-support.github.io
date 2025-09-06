import React from 'react';

interface ModernHeaderProps {
  className?: string;
}

const ModernHeader: React.FC<ModernHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernHeader;