import React from 'react';

interface CreatePostButtonProps {
  className?: string;
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreatePostButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreatePostButton;