import React from 'react';

interface OffworldLabProps {
  className?: string;
}

const OffworldLab: React.FC<OffworldLabProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OffworldLab</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OffworldLab;