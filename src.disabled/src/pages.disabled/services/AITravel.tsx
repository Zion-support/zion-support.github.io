import React from 'react';

interface AITravelProps {
  className?: string;
}

const AITravel: React.FC<AITravelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AITravel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AITravel;