import React from 'react';

interface React-router-domProps {
  className?: string;
}

const React-router-dom: React.FC<React-router-domProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>React-router-dom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default React-router-dom;