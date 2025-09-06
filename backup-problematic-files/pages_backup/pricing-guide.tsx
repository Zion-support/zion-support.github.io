import React from 'react';

interface Pricing-guideProps {
  className?: string;

const Pricing-guide: React.FC<Pricing-guideProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Pricing-guide</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Pricing-guide;