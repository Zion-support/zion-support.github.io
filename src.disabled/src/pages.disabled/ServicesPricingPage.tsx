import React from 'react';

interface ServicesPricingPageProps {
  className?: string;
}

const ServicesPricingPage: React.FC<ServicesPricingPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesPricingPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesPricingPage;