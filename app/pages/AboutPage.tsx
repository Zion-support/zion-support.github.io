'use client';
import React from 'react';

interface AboutPageProps {
  className?: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AboutPage</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default AboutPage;
