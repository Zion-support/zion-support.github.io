<<<<<<< HEAD




;
interface MainLayoutProps {

  children: ReactNode;
=======
import React from 'react';
import Head from 'next/head';

interface MainLayoutProps {
  children: React.ReactNode;
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47
const MainLayout: React.FC<MainLayoutProps> = ({
<<<<<<< HEAD

  children;
  title;
}) => {

=======
  children,
  title = 'Zion Tech Group - Leading Technology Solutions',
  description = 'Zion Tech Group provides cutting-edge AI, blockchain, and cloud solutions for modern businesses.',
  keywords = 'AI, blockchain, cloud, technology, solutions, Zion Tech Group',
  image = '/images/og-image.jpg',
  url = 'https://ziontechgroup.com'
}) => {
>>>>>>> origin/main
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
<<<<<<< HEAD

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
=======
      
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47
    </>
  );
};

<<<<<<< HEAD

=======
export default MainLayout;
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47
