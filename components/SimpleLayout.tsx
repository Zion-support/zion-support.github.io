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
  description 
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