import React from 'react';

interface EquipmentErrorBoundaryProps {
  className?: string;
}

const EquipmentErrorBoundary: React.FC<EquipmentErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentErrorBoundary;