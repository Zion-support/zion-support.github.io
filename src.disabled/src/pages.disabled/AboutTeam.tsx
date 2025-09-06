import React from 'react';

interface AboutTeamProps {
  className?: string;
}

const AboutTeam: React.FC<AboutTeamProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AboutTeam</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AboutTeam;