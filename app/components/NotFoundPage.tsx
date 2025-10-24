'use client';
import React from 'react';
<<<<<<< HEAD
interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}
const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
=======

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

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default NotFoundPage;