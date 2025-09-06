import React from 'react';

interface App.smoke.testProps {
  className?: string;
}

const App.smoke.test: React.FC<App.smoke.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>App.smoke.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default App.smoke.test;