import React from 'react';

interface HireProps {
  className?: string;
}

const Hire: React.FC<HireProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Hire</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Hire;