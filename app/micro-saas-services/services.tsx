import React from 'react';

interface servicesProps {
interface ServicesProps {
  className?: string;
}

export default function services({ className = '', children }: servicesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
    <div>
      <h1>Component</h1>
const Services: React.FC<ServicesProps> = ({ className = "" }) => {
    <div className={className}>
      <h2>Services</h2>
};


export default Services;

export default function Services({ className = '', children, ...props }: ServicesProps) {
export default $1;
