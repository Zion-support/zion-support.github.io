import React from 'react';

interface SecurityProps {
  className?: string;

const Security: React.FC<SecurityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Security</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Security;