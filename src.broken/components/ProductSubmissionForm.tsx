import React from 'react';

interface ProductSubmissionFormProps {
  className?: string;
}

const ProductSubmissionForm: React.FC<ProductSubmissionFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProductSubmissionForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProductSubmissionForm;