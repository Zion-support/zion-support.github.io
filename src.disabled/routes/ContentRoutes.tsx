import React from 'react';

interface ContentRoutesProps {
  className?: string;
}

const ContentRoutes: React.FC<ContentRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ContentRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ContentRoutes;