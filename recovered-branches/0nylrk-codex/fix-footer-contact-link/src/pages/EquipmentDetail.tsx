import React from 'react';

interface EquipmentDetailProps {
  className?: string;
}

const EquipmentDetail: React.FC<EquipmentDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentDetail;