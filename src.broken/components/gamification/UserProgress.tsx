import React from 'react';

interface UserProgressProps {
  className?: string;
}

const UserProgress: React.FC<UserProgressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserProgress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserProgress;