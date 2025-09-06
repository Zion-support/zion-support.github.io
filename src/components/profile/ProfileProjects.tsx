import React from 'react';

interface ProfileProjectsProps {
  className?: string;
}

const ProfileProjects: React.FC<ProfileProjectsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProfileProjects</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProfileProjects;