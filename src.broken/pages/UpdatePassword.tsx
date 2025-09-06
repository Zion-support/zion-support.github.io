import React from 'react';

interface UpdatePasswordProps {
  className?: string;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UpdatePassword</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UpdatePassword;