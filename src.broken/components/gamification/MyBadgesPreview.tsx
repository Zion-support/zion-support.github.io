import React from 'react';

interface MyBadgesPreviewProps {
  className?: string;
}

const MyBadgesPreview: React.FC<MyBadgesPreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MyBadgesPreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MyBadgesPreview;