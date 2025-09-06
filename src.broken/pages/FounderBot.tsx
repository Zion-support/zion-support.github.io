import React from 'react';

interface FounderBotProps {
  className?: string;
}

const FounderBot: React.FC<FounderBotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FounderBot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FounderBot;