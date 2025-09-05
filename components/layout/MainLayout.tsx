import _React from 'react';,
import Head from 'next/head';';

interface MainLayoutProps {}
  children: _React.ReactNode;,
  title?: string;,
  description?: string;
  keywords?: string;
}

  children, 
  title = "Zion Tech Group", ",
  description = "Leading technology solutions provider",",
  keywords = "technology, AI, cloud, micro SaaS"";
}: MainLayoutProps) {}
  return (;,
    <>;
      <Head>;
        <title>{title}</title>,
        <meta name="description" content={description} />",
        <meta name="keywords" content={keywords} />",
        <meta name="viewport" content="width=device-width, initial-scale=1" />",
        <link rel="icon" href="/favicon.ico" />";,
      </Head>;
      {children}
    </>,
  );
}