import React from 'react';

interface AvatarMenu.testProps {
  className?: string;
}

const AvatarMenu.test: React.FC<AvatarMenu.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AvatarMenu.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AvatarMenu.test;