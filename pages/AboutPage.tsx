import React from 'react';

interface AboutPageProps {
  children?: React.ReactNode;
  className?: string;
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div>
      <h1>AboutPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AboutPage;
