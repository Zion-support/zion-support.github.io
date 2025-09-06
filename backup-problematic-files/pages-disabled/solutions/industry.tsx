import React from 'react';

interface IndustryProps {
  className?: string;

const Industry: React.FC<IndustryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Industry</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Industry;