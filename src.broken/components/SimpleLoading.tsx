import React from 'react';

interface SimpleLoadingProps {
  className?: string;
}

const SimpleLoading: React.FC<SimpleLoadingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SimpleLoading</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SimpleLoading;