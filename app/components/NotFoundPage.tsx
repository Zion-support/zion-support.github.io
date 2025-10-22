import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>NotFoundPage</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default NotFoundPage;