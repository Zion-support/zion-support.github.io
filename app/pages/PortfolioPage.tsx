import React from 'react';

interface PortfolioPageProps {
  className?: string;
  children?: React.ReactNode;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`portfoliopage ${className}`}>
      {children}
    </div>
  );
};

export default PortfolioPage;