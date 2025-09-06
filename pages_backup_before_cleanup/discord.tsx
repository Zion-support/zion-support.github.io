import React from 'react';

interface DiscordProps {
  className?: string;
}

const Discord: React.FC<DiscordProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Discord</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Discord;