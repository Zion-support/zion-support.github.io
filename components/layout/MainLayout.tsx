import React from 'react';''
import Head from 'next/head';'
interface MainLayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
</MainLayoutProps>
    <>
      <Head>
</Head>
        <title>{title}</title>'
        <meta name="description" content={description} />"
</meta>"
        <meta name="keywords" content={keywords} />"
</meta>"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
</meta>"
        <link rel="icon" href="/favicon.ico" />"
</link>
      </Head>
    </>)
  );
};

export default MainLayout;"