import React from 'react';

interface EquipmentPage.testProps {
  className?: string;
}

const EquipmentPage.test: React.FC<EquipmentPage.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EquipmentPage.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EquipmentPage.test;