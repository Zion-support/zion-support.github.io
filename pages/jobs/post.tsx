import React from 'react';

interface PostProps {
  className?: string;
}

const Post: React.FC<PostProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Post</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Post;