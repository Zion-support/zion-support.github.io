import React from 'react';

interface NotFoundPageProps {
  className?: string;
  children?: React.ReactNode;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className = '', children }) => {
  return (
<div className={`notfoundpage-component ${className}`}>
      {children}
    </div>
  );
};
cursor/fix-errors-and-merge-to-main-7271

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;