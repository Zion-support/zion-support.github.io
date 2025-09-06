import React from 'react';

interface AlertProps {
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Alert</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Alert;