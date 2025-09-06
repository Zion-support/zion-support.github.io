import React from 'react';

interface PostJobProps {
  className?: string;
}

const PostJob: React.FC<PostJobProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PostJob</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PostJob;