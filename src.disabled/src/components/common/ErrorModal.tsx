import React from 'react';

interface ErrorModalProps {
  className?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorModal;