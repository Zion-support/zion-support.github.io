import React from 'react';

interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ 
  className = '', 
  children 
}: ServiceTemplateProps) {
  return (
    <div className={'service-template ' + className}>
      {children || <p>Service Template component</p>}
    </div>
  );
}
