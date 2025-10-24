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
    <div className={'app ' + className}>
      {children || <p>App component</p>}
    </div>
  );
};

export default App;
