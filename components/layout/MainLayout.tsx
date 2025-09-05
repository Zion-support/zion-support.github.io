import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
import Header from '../Header';
import Footer from '../Footer';

>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
}
=======
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
<<<<<<< HEAD
  keywords = "technology, AI, cloud, micro SaaS"
}: MainLayoutProps) {
=======
  keywords = "technology, AI, IT, micro SaaS, solutions",
  canonical = "https://ziontechgroup.com",
  ogTitle,
  ogDescription,
  ogImage,
  noIndex = false,
}) => {
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
=======
        {canonical && <link rel="canonical" href={canonical} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
