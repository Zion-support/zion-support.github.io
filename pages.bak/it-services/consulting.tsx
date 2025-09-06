import React from 'react';

interface ConsultingProps {
  className?: string;
}

const Consulting: React.FC<ConsultingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Consulting</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Consulting;