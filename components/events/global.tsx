import React from 'react';

interface GlobalProps {
  className?: string;
}

const Global: React.FC<GlobalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Global</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Global;