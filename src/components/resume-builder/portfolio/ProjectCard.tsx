import React from 'react';

interface ProjectCardProps {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectCard;