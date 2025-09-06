import React from 'react';

interface Hover-cardProps {
  className?: string;
}

const Hover-card: React.FC<Hover-cardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Hover-card</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Hover-card;