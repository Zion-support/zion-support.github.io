import React from 'react';

interface ITOnsiteServicesPageProps {
  className?: string;
}

const ITOnsiteServicesPage: React.FC<ITOnsiteServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITOnsiteServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITOnsiteServicesPage;