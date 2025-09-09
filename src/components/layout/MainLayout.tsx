import React from 'react';
import Layout from '../Layout';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function MainLayout({ children, title, description }: MainLayoutProps) {
  return (
    <Layout title={title} description={description}>
      <main className="main-content">
        {children}
      </main>
    </Layout>
  );
}