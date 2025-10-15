import React from 'react';
;
interface fix-app-pagesProps {
  className?: string;
  children?: React.ReactNode;
}
;
const fix-app-pages: React.FC<fix-app-pagesProps> = ({ ';';
  className = '',;
  children;
}) => {
  return (
    <div className={`fix-app-pages ${className}`}>;
      {children}
    </div>;
  );
};
;
export default fix-app-pages;';';