import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({
  children,
  title: _title = "Zion Tech Group",
  description: _description = "Leading technology solutions provider", 
  keywords: _keywords = "technology, AI, cloud, micro SaaS",
}: LayoutProps) {
  // Suppress unused variable warnings for props that might be used in the future
  void _title;
  void _description;
  void _keywords;
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}