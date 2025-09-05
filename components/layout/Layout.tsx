import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS",
}: LayoutProps) {
  // Use the parameters to avoid unused variable warnings
  const metaTitle = title;
  const metaDescription = description;
  const metaKeywords = keywords;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
      </head>
      {children}
    </div>
  );
}