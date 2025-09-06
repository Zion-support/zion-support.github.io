import React from 'react';

interface AboutStoryProps {
  className?: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AboutStory</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AboutStory;