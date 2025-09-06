import React from 'react';

interface PortfolioListProps {
  className?: string;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PortfolioList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PortfolioList;