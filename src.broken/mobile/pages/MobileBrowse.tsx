import React from 'react';

interface MobileBrowseProps {
  className?: string;
}

const MobileBrowse: React.FC<MobileBrowseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileBrowse</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileBrowse;