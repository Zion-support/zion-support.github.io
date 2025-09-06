import React from 'react';

interface MatchProps {
  className?: string;
}

const Match: React.FC<MatchProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Match</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Match;