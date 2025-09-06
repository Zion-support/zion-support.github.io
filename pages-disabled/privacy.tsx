import React from 'react';

interface PrivacyProps {
  className?: string;
}

const Privacy: React.FC<PrivacyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Privacy</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Privacy;