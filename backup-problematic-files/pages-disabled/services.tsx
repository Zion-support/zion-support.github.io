import React from 'react';

interface ServicesProps {
  className?: string;

const Services: React.FC<ServicesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Services;