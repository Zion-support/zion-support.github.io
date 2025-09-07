import React from 'react';

interface AppMinimalProps {
  className?: string;
  children?: React.ReactNode;
}

const AppMinimal: React.FC<AppMinimalProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <main 
      className={`app-minimal ${className}`}
      role="main"
      data-testid="app-minimal"
    >
      {children || (
        <div className="minimal-content">
          <h1>Zion Tech Group - Minimal</h1>
          <p>Building the future with innovative technology solutions</p>
        </div>
      )}
    </main>
  );
}
