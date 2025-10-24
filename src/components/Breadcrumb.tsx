import React from 'react';

interface BreadcrumbProps {
  className?: string;
}

export default function Breadcrumb({ className }: BreadcrumbProps) {
  return (
    <div className={className}>
      <h1>Breadcrumb</h1>
      <p>Component content</p>
    </div>
  );
}