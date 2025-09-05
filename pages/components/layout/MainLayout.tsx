<<<<<<< HEAD
import * as React from 'react';
import Layout from '../Layout';
=======
import React from 'react';
import Layout from '../../../components/layout/Layout';
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8

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