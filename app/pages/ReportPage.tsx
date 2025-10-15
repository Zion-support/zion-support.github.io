import React from 'react';

interface ReportPageProps {
  className?: string;
  children?: React.ReactNode;
}

const ReportPage: React.FC<ReportPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`reportpage ${className}`}>
      {children}
    </div>
  );
};

export default ReportPage;