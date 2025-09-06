import React from 'react';

interface HelpCenterPageProps {
  className?: string;
}

const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HelpCenterPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HelpCenterPage;