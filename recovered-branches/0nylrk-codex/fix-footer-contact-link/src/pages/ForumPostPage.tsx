import React from 'react';

interface ForumPostPageProps {
  className?: string;
}

const ForumPostPage: React.FC<ForumPostPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ForumPostPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ForumPostPage;