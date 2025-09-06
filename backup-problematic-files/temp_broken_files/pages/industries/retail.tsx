import React from 'react';

interface RetailProps {
  className?: string;

const Retail: React.FC<RetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Retail</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Retail;