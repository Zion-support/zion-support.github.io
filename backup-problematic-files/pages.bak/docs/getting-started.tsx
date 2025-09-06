import React from 'react';

interface Getting-startedProps {
  className?: string;
}

const Getting-started: React.FC<Getting-startedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Getting-started</h1>
      <p>This component is under development.</p>
    </div>
  );
