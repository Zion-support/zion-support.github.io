import React, { ReactNode } from 'react';
interface SimpleLayoutProps {_children: ReactNode;
  title?: string;}
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface SimpleLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ 
  children, 
  title = 'Zion Tech Group', 
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development.' 
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );
};

export default SimpleLayout;
