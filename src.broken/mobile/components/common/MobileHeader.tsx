import React from 'react';

interface MobileHeaderProps {
  className?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileHeader;