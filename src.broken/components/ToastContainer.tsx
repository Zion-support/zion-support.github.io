import React from 'react';

interface ToastContainerProps {
  className?: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ToastContainer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ToastContainer;