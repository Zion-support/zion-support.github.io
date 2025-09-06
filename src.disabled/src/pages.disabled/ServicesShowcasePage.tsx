import React from 'react';

interface ServicesShowcasePageProps {
  className?: string;
}

const ServicesShowcasePage: React.FC<ServicesShowcasePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServicesShowcasePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServicesShowcasePage;