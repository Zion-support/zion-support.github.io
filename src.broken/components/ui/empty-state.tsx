import React from 'react';

interface Empty-stateProps {
  className?: string;
}

const Empty-state: React.FC<Empty-stateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Empty-state</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Empty-state;