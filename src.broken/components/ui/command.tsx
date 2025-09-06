import React from 'react';

interface CommandProps {
  className?: string;
}

const Command: React.FC<CommandProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Command</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Command;