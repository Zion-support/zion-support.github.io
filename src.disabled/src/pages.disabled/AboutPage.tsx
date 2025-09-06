import React from 'react';

interface AboutPageProps {
  className?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AboutPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AboutPage;