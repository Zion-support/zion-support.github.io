import React from 'react';

interface InitProps {
  className?: string;
}

const Init: React.FC<InitProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Init</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Init;