import React from 'react';

interface SmbProps {
  className?: string;

const Smb: React.FC<SmbProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Smb</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Smb;