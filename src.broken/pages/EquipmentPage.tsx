import React from 'react';

interface EquipmentPageProps {
  className?: string;
}

const EquipmentPage: React.FC<EquipmentPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentPage;