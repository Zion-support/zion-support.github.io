import React from 'react';

interface NotFoundPageProps {
  children?: React.ReactNode;
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotFoundPage;
