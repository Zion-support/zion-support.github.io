import React from 'react';

interface HelpProps {
  className?: string;

const Help: React.FC<HelpProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Help</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Help;