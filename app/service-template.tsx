import React from 'react';

interface ServiceTemplateProps {
  children: React.ReactNode;
}

export default function ServiceTemplate({ children }: ServiceTemplateProps) {
  return (
    <div>
      {children}
    </div>
  );
}