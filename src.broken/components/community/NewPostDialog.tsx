import React from 'react';

interface NewPostDialogProps {
  className?: string;
}

const NewPostDialog: React.FC<NewPostDialogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewPostDialog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewPostDialog;