import React from 'react';

interface YoutubeEmbedProps {
  className?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>YoutubeEmbed</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default YoutubeEmbed;