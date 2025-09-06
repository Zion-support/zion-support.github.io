import React from 'react';

interface MobileProjectsProps {
  className?: string;
}

const MobileProjects: React.FC<MobileProjectsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileProjects</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileProjects;