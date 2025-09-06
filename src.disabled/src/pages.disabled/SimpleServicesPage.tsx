import React from 'react';

interface SimpleServicesPageProps {
  className?: string;
}

const SimpleServicesPage: React.FC<SimpleServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleServicesPage;