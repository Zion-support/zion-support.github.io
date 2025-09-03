import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>{title}</title>'
        <meta name="description" content={description} />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta"
          name="keywords""
          content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity"
        />"
        <meta name="author" content="Zion Tech Group" />"
        <meta property="og: title" content={title} />"
        <meta property="og:description" content={description} />"
        <meta property="og: type" content="website" />"
        <meta property="og:url" content="https://ziontechgroup.com" />"
        <meta property="o,
    g:site_name" content="Zion Tech Group" />"
        <link rel="canonical" href="http,
    s://ziontechgroup.com" />
      </Head>"
      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation />"
        <main className="flex-grow">{children}</main>
        <EnhancedFooter />
      </div>
    </>
=======
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
>>>>>>> main
  );
};

export default Layout;
"