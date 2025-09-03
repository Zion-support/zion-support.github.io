<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
import EnhancedNavigation from './layout/EnhancedNavigation';
import EnhancedFooter from './layout/EnhancedFooter';
>>>>>>> origin/main
=======
import React from "react"
import Head from "next/head"
interface LayoutProps {;
>>>>>>> main

  children: React.ReactNode,
  title?: string,
  description?: string,
interface LayoutProps {
<<<<<<< HEAD
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
<<<<<<< HEAD
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation'
=======
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
>>>>>>> origin/main
=======
  children: React.ReactNode
  title?: string
  description?: string


const Component: React.FC<LayoutProps> = ({ children, "
  title = "Zion Tech Group - Leading Technology Solutions Provider","
  description = "Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
>>>>>>> main
}) => {
  return (
    <>
<Head>
        <title>{title}</title>
<<<<<<< HEAD
        <meta name="description" content={description} />
<<<<<<< HEAD
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
=======
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
=======
        <meta name="description" content="{description}"  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />"
        <meta name="keywords" content="technology solutions, AI development, cloud services, web development, mobile development, blockchain, IoT, cybersecurity"  />"
        <meta name="author" content="Zion Tech Group"  />"
        <meta property="og:title" content="{title}"  />"
        <meta property="og:description" content="{description}"  />"
        <meta property="og: type" content="website"  />"
        <meta property="og:url" content="https:// comment
        <meta property="og:site_name" content="Zion Tech Group"  />"
        <link rel="canonical" href="https:// comment
        <link rel="icon" href="/favicon.ico"  />
      </Head>"
>>>>>>> main
      <div className="min-h-screen flex flex-col">
        <EnhancedNavigation  />"
        <main className="flex-grow">,
          {children}

        </main>
<<<<<<< HEAD
        <EnhancedFooter />
>>>>>>> origin/main
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default Layout;
>>>>>>> origin/main
=======
        <Footer  />
      </div>
    </>
  )}
"';
export default Layout
>>>>>>> main
