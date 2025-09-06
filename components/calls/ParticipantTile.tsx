import React from 'react';

interface ParticipantTileProps {
  className?: string;
}

const ParticipantTile: React.FC<ParticipantTileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ParticipantTile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ParticipantTile;