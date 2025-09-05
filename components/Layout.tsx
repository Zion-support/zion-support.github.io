import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  showSidebar?: boolean;
}

export default function Layout({ 
  children, 
  title,
  description,
  keywords,
  showSidebar = false
}: LayoutProps) {
  return (
    <MainLayout
      title={title}
      description={description}
      keywords={keywords}
      showSidebar={showSidebar}
    >
      {children}
    </MainLayout>
  );
}