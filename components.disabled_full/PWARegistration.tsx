import React from 'react';

interface PWARegistrationProps {
  className?: string;
}

const PWARegistration: React.FC<PWARegistrationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PWARegistration</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PWARegistration;