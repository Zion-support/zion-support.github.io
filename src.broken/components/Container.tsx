import React from 'react';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Container</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Container;