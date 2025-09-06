import React from 'react';

interface EditProps {
  className?: string;
}

const Edit: React.FC<EditProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Edit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Edit;