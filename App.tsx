import React from 'react';

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>App</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default App;