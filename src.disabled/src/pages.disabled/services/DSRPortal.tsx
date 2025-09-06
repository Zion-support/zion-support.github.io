import React from 'react';

interface DSRPortalProps {
  className?: string;
}

const DSRPortal: React.FC<DSRPortalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DSRPortal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DSRPortal;