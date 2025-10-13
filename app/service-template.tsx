import React from "react";
interface ServiceTemplateProps {,
  // TODO: Add implementation;
}
  // TODO: Add implementation;
}
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ className = '', children, ...props }: ServiceTemplateProps) {
  return()
    <div className={`servicetemplate-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}