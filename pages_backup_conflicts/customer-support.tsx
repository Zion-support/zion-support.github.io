import React from 'react';

interface Customer-supportProps {
  className?: string;
}

const Customer-support: React.FC<Customer-supportProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Customer-support</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Customer-support;