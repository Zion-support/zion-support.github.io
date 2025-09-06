import React from 'react';

interface ApiErrorCodesProps {
  className?: string;
}

const ApiErrorCodes: React.FC<ApiErrorCodesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiErrorCodes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiErrorCodes;