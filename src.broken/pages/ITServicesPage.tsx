import React from 'react';

interface ITServicesPageProps {
  className?: string;
}

const ITServicesPage: React.FC<ITServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITServicesPage;