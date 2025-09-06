import React from 'react';

interface RolePickerProps {
  className?: string;
}

const RolePicker: React.FC<RolePickerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RolePicker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RolePicker;