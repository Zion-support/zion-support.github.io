import React from 'react';

interface ToastProps {
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Toast</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Toast;