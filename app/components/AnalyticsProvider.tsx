<<<<<<< HEAD
'use client';
import React from 'react';
=======
import React from 'react';

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default AnalyticsProvider;
=======

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'analyticsprovider ' + className}>
      {children || <p>AnalyticsProvider component</p>}
    </div>
  );
};

export default AnalyticsProvider;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
