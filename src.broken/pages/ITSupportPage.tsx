import React from 'react';

interface ITSupportPageProps {
  className?: string;
}

const ITSupportPage: React.FC<ITSupportPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ITSupportPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ITSupportPage;