import React from 'react';

interface PrivacyPolicyProps {
  className?: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrivacyPolicy</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PrivacyPolicy;