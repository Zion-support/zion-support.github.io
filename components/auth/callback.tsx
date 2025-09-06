import React from 'react';

interface CallbackProps {
  className?: string;
}

const Callback: React.FC<CallbackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Callback</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Callback;