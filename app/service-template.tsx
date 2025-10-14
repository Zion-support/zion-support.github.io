import React from 'react';

interface ServiceTemplateProps {
  className?: string;
}

export default function ServiceTemplate({ className = '' }: ServiceTemplateProps) {
  return (
    <div className={`${className}`}>
      <h2>service-template</h2>
      <p>Component content goes here.</p>
    </div>
  );
}