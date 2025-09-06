import React from 'react';

interface OnsiteSupportProps {
  className?: string;
}

const OnsiteSupport: React.FC<OnsiteSupportProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnsiteSupport</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnsiteSupport;