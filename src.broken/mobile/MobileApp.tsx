import React from 'react';

interface MobileAppProps {
  className?: string;
}

const MobileApp: React.FC<MobileAppProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileApp</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileApp;