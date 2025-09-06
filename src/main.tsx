import React from 'react';

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Main</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Main;