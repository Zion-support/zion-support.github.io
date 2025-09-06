import React from 'react';

interface ServiceProviderRegistrationFormProps {
  className?: string;
}

const ServiceProviderRegistrationForm: React.FC<ServiceProviderRegistrationFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceProviderRegistrationForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceProviderRegistrationForm;