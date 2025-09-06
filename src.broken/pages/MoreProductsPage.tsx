import React from 'react';

interface MoreProductsPageProps {
  className?: string;
}

const MoreProductsPage: React.FC<MoreProductsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MoreProductsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MoreProductsPage;