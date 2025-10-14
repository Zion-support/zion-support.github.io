'use client';
import React from 'react';

interface ServiceTemplateProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceTemplate({ children, className = '' }: ServiceTemplateProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}