<<<<<<< HEAD
import React from 'react';
import Layout from '../Layout';

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
}

export default function MainLayout({ title, description, children, keywords }: MainLayoutProps) {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
}