import React from 'react';

interface Diversity-inclusionProps {
  className?: string;
}

const Diversity-inclusion: React.FC<Diversity-inclusionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Diversity-inclusion</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Diversity-inclusion;