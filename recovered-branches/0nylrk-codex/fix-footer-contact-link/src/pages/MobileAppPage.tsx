import React from 'react';

interface MobileAppPageProps {
  className?: string;
}

const MobileAppPage: React.FC<MobileAppPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileAppPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileAppPage;