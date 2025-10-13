<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

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
