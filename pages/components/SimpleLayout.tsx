import React from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

export default function SimpleLayout({ title, children, description }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || "Zion Tech Group - Leading Technology Solutions Provider"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}