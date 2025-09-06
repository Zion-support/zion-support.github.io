import React from 'react';

interface It-infrastructureProps {
  className?: string;
}

const It-infrastructure: React.FC<It-infrastructureProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>It-infrastructure</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default It-infrastructure;