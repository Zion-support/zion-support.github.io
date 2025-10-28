import React from 'react';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={`not-found-page ${className || ''}`}>
      {children || (
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600">Page not found</p>
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;



