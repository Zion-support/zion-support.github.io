import React from 'react';

interface CreateServiceProfileProps {
  className?: string;
}

const CreateServiceProfile: React.FC<CreateServiceProfileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreateServiceProfile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreateServiceProfile;