import React from 'react';

interface Scroll-areaProps {
  className?: string;
}

const Scroll-area: React.FC<Scroll-areaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Scroll-area</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Scroll-area;