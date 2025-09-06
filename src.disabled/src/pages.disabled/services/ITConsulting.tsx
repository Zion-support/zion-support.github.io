import React from 'react';

interface ITConsultingProps {
  className?: string;
}

const ITConsulting: React.FC<ITConsultingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITConsulting</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITConsulting;