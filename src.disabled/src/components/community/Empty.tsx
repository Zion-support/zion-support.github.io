import React from 'react';

interface EmptyProps {
  className?: string;
}

const Empty: React.FC<EmptyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Empty</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Empty;