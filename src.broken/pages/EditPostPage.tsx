import React from 'react';

interface EditPostPageProps {
  className?: string;
}

const EditPostPage: React.FC<EditPostPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EditPostPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EditPostPage;