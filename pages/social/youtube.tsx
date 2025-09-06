import React from 'react';

interface YoutubeProps {
  className?: string;
}

const Youtube: React.FC<YoutubeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Youtube</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Youtube;