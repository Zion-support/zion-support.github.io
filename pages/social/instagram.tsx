import React from 'react';

interface InstagramProps {
  className?: string;
}

const Instagram: React.FC<InstagramProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Instagram</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Instagram;