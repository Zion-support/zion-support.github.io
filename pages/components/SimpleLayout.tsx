import React from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Zion Tech Group</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}