import React from 'react';

interface PodcastProps {
  className?: string;
}

const Podcast: React.FC<PodcastProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Podcast</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Podcast;