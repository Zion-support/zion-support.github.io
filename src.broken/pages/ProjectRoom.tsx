import React from 'react';

interface ProjectRoomProps {
  className?: string;
}

const ProjectRoom: React.FC<ProjectRoomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProjectRoom</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProjectRoom;