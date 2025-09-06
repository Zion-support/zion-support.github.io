import React from 'react';

interface IndustriesProps {
  className?: string;

const Industries: React.FC<IndustriesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Industries</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Industries;