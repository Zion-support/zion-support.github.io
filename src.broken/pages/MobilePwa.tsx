import React from 'react';

interface MobilePwaProps {
  className?: string;
}

const MobilePwa: React.FC<MobilePwaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobilePwa</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobilePwa;