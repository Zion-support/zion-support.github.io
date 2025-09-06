import React from 'react';

interface PortfolioBuilderProps {
  className?: string;
}

const PortfolioBuilder: React.FC<PortfolioBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PortfolioBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PortfolioBuilder;