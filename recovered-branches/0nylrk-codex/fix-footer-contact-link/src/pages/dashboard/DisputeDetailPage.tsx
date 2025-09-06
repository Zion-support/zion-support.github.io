import React from 'react';

interface DisputeDetailPageProps {
  className?: string;
}

const DisputeDetailPage: React.FC<DisputeDetailPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputeDetailPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputeDetailPage;