import React from 'react';

interface App-minimalProps {
  className?: string;
  children?: React.ReactNode;
}

const App-minimal: React.FC<App-minimalProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`app-minimal ${className}`}>
      {children}
    </div>
  );
};

export default App-minimal;