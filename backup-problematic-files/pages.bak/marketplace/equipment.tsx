import React from 'react';

interface EquipmentProps {
  className?: string;
}

const Equipment: React.FC<EquipmentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Equipment</h1>
      <p>This component is under development.</p>
    </div>
  );
