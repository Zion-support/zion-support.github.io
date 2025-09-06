import React from 'react';

interface ComposeProps {
  className?: string;
}

const Compose: React.FC<ComposeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Compose</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Compose;