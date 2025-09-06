import React from 'react';

interface WaitlistSectionProps {
  className?: string;
}

const WaitlistSection: React.FC<WaitlistSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WaitlistSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WaitlistSection;