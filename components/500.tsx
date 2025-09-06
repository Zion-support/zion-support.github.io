import React from 'react';

interface 500Props {
  className?: string;
}

const 500: React.FC<500Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>500</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default 500;