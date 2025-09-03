import React from 'react';
import Head from 'next/head';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group - Leading Technology Solutions'}</title>
        <meta name="description" content={description || 'Zion Tech Group provides cutting-edge technology solutions including AI services, cloud platforms, cybersecurity, and custom software development.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ModernHeader />
      <main>{children}</main>
      <SimpleFooter />
    </>
  );
}