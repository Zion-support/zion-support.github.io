import React from 'react';

interface ModernLoaderProps {
  className?: string;
}

const ModernLoader: React.FC<ModernLoaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModernLoader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModernLoader;