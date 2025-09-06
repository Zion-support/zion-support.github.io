import React from 'react';

interface Data-analyticsProps {
  className?: string;

const Data-analytics: React.FC<Data-analyticsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Data-analytics</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Data-analytics;