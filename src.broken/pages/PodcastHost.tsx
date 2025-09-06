import React from 'react';

interface PodcastHostProps {
  className?: string;
}

const PodcastHost: React.FC<PodcastHostProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PodcastHost</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PodcastHost;