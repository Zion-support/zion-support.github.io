import React from 'react';

interface LandingPageProps {
  className?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LandingPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LandingPage;