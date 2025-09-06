import React from 'react';

interface ServicesComparisonPageProps {
  className?: string;
}

const ServicesComparisonPage: React.FC<ServicesComparisonPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesComparisonPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesComparisonPage;