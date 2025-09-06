import React from 'react';

interface ExperienceFilterProps {
  className?: string;
}

const ExperienceFilter: React.FC<ExperienceFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExperienceFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExperienceFilter;