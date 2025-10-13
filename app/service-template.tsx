import React from 'react';

interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ className = '', children, ...props }: ServiceTemplateProps) {
  return (
    <div className={`servicetemplate-component ${className}`} {...props}>
      {children}
    </div>
  );
}
