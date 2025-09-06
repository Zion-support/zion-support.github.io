import React from 'react';

interface Safe-component-loaderProps {
  className?: string;
}

const Safe-component-loader: React.FC<Safe-component-loaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Safe-component-loader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Safe-component-loader;