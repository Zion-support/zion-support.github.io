import React from 'react';

interface DisputesPageProps {
  className?: string;
}

const DisputesPage: React.FC<DisputesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputesPage;