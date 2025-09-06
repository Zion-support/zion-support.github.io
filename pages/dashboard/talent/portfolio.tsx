import React from 'react';

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Portfolio</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Portfolio;