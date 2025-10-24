import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
}

export default function ServicePageTemplate({ className }: ServicePageTemplateProps) {
  return (
    <div className={className}>
      <h1>ServicePageTemplate</h1>
      <p>Component content</p>
    </div>
  );
}