import React from 'react';

interface servicetemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function servicetemplate({ className = '', children }: servicetemplateProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}