import React from 'react';

interface Lazy-loadProps {
  className?: string;
}

const Lazy-load: React.FC<Lazy-loadProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Lazy-load</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Lazy-load;