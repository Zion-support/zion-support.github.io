import React from 'react';

interface Password-checkerProps {
  className?: string;
}

const Password-checker: React.FC<Password-checkerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Password-checker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Password-checker;