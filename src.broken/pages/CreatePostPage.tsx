import React from 'react';

interface CreatePostPageProps {
  className?: string;
}

const CreatePostPage: React.FC<CreatePostPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreatePostPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreatePostPage;