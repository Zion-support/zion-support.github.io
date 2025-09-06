import React from 'react';
<<<<<<< HEAD
interface PricingProps {
  // Add props here as needed
export default function Pricing({ }: PricingProps) {
=======

interface PricingProps {
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className }) => {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  return (
    <div className={className || ''}>
      <h1>Pricing</h1>
      <p>This component is under development.</p>
    </div>
  );
<<<<<<< HEAD
}
=======
}
}
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
