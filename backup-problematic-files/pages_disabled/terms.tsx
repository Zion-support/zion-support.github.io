import React from 'react';

interface TermsProps {
  className?: string;

const Terms: React.FC<TermsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Terms</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Terms;