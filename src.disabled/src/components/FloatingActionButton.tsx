import React from 'react';

interface FloatingActionButtonProps {
  className?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FloatingActionButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FloatingActionButton;