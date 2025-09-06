import React from 'react';

interface AchievementsProps {
  className?: string;
}

const Achievements: React.FC<AchievementsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Achievements</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Achievements;