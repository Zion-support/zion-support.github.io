import React from 'react';

interface TreeProps {
  className?: string;
}

const Tree: React.FC<TreeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tree</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tree;