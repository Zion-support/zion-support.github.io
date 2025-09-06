import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotFoundPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotFoundPage;