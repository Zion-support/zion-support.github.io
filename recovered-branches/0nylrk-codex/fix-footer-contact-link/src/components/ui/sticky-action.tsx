import React from 'react';

interface Sticky-actionProps {
  className?: string;
}

const Sticky-action: React.FC<Sticky-actionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sticky-action</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sticky-action;