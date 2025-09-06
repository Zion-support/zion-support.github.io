import React from 'react';

interface PostFormProps {
  className?: string;
}

const PostForm: React.FC<PostFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PostForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PostForm;