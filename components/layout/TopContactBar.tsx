import React from 'react';

interface TopContactBarProps {
  className?: string;
}

const TopContactBar: React.FC<TopContactBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TopContactBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TopContactBar;