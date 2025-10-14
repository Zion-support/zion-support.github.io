'use client';
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""import React from ""react"";

interface ServiceCardProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ className = "" }) => {
  return (
    <div className={`servicecard ${className}`}>
      <h2>Service Card</h2>
      <p>This component is under development.</p></div>
    </div>
  );
};

export default ServiceCard;