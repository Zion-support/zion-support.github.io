import React from 'react';

interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Team</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Team;