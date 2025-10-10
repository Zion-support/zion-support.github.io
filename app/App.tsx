'use client';

import React from 'react';

interface AppProps {
  className?: string;
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`app-component ${className}`}>
      {children}
    </div>
  );
};

export default App;
