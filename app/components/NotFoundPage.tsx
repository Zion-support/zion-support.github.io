'use client';
import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>NotFoundPage</h2>
      <p>NotFoundPage component for enhanced functionality.</p>
    </div>
  );
};

export default NotFoundPage;