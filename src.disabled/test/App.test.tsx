import React from 'react';

interface App.testProps {
  className?: string;
}

const App.test: React.FC<App.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>App.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default App.test;