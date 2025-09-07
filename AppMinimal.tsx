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
          <h1>Minimal App</h1>
          <p>This is a minimal React component for testing purposes.</p>
        </div>
      )}
    </main>
  );
};

export default AppMinimal;