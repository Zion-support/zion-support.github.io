import React from 'react';

interface ModernButtonProps {
  className?: string;
}

const ModernButton: React.FC<ModernButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernButton;