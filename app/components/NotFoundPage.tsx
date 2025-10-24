'use client'
import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Not Found Page</h2>
      <p className="text-gray-600">This is a placeholder component for Not Found Page.</p>
    </div>
  );
};

export default NotFoundPage;
