import React from 'react';

interface NewProductsPageProps {
  className?: string;
}

const NewProductsPage: React.FC<NewProductsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewProductsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewProductsPage;