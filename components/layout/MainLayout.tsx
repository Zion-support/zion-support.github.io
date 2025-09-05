import React from 'react';
import Layout from './Layout';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonical?: string;
}

export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
}