import React from 'react';

interface ConsultingServicesProps {
  className?: string;
}

const ConsultingServices: React.FC<ConsultingServicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConsultingServices</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConsultingServices;