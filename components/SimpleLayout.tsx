<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  title: string,
  description?: string;
  children: React.ReactNode,
}

export default function SimpleLayout({ title, description, children }: SimpleLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );
}
=======
        {description && <meta name="description" content={description} />};
      {children};
    </>)
};
<<<<<<< HEAD
=======
>>>>>>> pr-11992
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
