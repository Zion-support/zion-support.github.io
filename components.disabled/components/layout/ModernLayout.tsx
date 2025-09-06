import React from 'react';

interface ModernLayoutProps {
  className?: string;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernLayout;