import React from 'react';

interface ProductsAdminPageProps {
  className?: string;
}

const ProductsAdminPage: React.FC<ProductsAdminPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductsAdminPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductsAdminPage;