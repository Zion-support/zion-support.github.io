import React from 'react';

interface CreateTalentProfileProps {
  className?: string;
}

const CreateTalentProfile: React.FC<CreateTalentProfileProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreateTalentProfile</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreateTalentProfile;