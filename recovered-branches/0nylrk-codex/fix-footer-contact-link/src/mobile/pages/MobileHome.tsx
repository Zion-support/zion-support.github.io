import React from 'react';

interface MobileHomeProps {
  className?: string;
}

const MobileHome: React.FC<MobileHomeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileHome</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileHome;