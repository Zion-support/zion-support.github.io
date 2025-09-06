import React from 'react';

interface ToastProviderProps {
  className?: string;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ToastProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ToastProvider;