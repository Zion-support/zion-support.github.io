import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      {children}
    </div>
  );
}