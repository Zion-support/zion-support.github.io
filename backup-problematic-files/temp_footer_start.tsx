import React from 'react';

interface Temp_footer_startProps {
  className?: string;

const Temp_footer_start: React.FC<Temp_footer_startProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Temp_footer_start</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Temp_footer_start;