import React from 'react';

interface Radio-groupProps {
  className?: string;
}

const Radio-group: React.FC<Radio-groupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Radio-group</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Radio-group;