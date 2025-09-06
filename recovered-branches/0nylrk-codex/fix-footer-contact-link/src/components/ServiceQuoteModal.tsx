import React from 'react';

interface ServiceQuoteModalProps {
  className?: string;
}

const ServiceQuoteModal: React.FC<ServiceQuoteModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceQuoteModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceQuoteModal;