import React from 'react';

interface ModernLoadingProps {
  className?: string;
}

const ModernLoading: React.FC<ModernLoadingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernLoading</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernLoading;