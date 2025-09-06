import React from 'react';

interface CloudProps {
  className?: string;
}

const Cloud: React.FC<CloudProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cloud</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Cloud;