import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface ContentStatisticsProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const ContentStatistics: React.FC<ContentStatisticsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ContentStatistics;
=======

const ContentStatistics: React.FC<ContentStatisticsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'contentstatistics ' + className}>
      {children || <p>ContentStatistics component</p>}
    </div>
  );
};

export default ContentStatistics;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
