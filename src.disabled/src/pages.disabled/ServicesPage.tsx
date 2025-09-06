import React from 'react';

interface ServicesPageProps {
  className?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesPage;