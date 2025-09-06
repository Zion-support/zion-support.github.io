import React from 'react';

interface KycProps {
  className?: string;
}

const Kyc: React.FC<KycProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Kyc</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Kyc;