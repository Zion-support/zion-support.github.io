import React from 'react';

interface ProductGalleryProps {
  className?: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductGallery</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductGallery;