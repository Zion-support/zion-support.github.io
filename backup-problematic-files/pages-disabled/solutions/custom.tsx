import React from 'react';

interface CustomProps {
  className?: string;

const Custom: React.FC<CustomProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Custom</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Custom;