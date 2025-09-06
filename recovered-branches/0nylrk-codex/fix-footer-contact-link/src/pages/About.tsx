import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>About</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default About;