import React from 'react';

interface PostCardProps {
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PostCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PostCard;