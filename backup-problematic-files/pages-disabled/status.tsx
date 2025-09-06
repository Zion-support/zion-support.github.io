import React from 'react';

interface StatusProps {
  className?: string;

const Status: React.FC<StatusProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Status</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Status;