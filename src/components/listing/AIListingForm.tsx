import React from 'react';

interface AIListingFormProps {
  className?: string;
}

const AIListingForm: React.FC<AIListingFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIListingForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIListingForm;