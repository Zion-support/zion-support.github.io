import React from 'react';

interface OsvWatchProps {
  className?: string;
}

const OsvWatch: React.FC<OsvWatchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OsvWatch</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OsvWatch;