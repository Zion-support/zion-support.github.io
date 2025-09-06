import React from 'react';

interface TopTalentsProps {
  className?: string;
}

const TopTalents: React.FC<TopTalentsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TopTalents</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TopTalents;