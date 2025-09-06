import React from 'react';

interface PartnersProps {
  className?: string;

const Partners: React.FC<PartnersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Partners</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Partners;