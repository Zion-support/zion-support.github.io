import React from 'react';

interface PublishProductProps {
  className?: string;
}

const PublishProduct: React.FC<PublishProductProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PublishProduct</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PublishProduct;