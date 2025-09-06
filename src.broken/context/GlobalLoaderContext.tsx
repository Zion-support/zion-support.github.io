import React from 'react';

interface GlobalLoaderContextProps {
  className?: string;
}

const GlobalLoaderContext: React.FC<GlobalLoaderContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalLoaderContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalLoaderContext;