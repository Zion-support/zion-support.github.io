import React from 'react';

interface WhitepapersProps {
  className?: string;

const Whitepapers: React.FC<WhitepapersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Whitepapers</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Whitepapers;