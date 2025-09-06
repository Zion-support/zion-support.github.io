import React from 'react';

interface HealthcareProps {
  className?: string;

const Healthcare: React.FC<HealthcareProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Healthcare</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Healthcare;