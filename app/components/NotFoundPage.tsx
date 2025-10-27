import React from 'react';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className, children }) => {
  return (
    <div className={className} role="main" aria-label="Page Not Found">
      {children || <p>Page Not Found</p>}
    </div>
  );
};

export default NotFoundPage;