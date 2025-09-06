import React from 'react';

interface PostCardSkeletonProps {
  className?: string;
}

const PostCardSkeleton: React.FC<PostCardSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PostCardSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PostCardSkeleton;