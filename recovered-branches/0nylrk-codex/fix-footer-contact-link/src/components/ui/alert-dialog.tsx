import React from 'react';

interface Alert-dialogProps {
  className?: string;
}

const Alert-dialog: React.FC<Alert-dialogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Alert-dialog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Alert-dialog;