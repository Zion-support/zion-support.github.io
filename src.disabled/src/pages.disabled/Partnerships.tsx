import React from 'react';

interface PartnershipsProps {
  className?: string;
}

const Partnerships: React.FC<PartnershipsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Partnerships</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Partnerships;