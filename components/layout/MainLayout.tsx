import React from 'react';
<<<<<<< HEAD
import Layout from './Layout';
=======
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keywords?: string;
  canonical?: string;
}

<<<<<<< HEAD
export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
=======
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group - Leading Technology Solutions Provider",
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.",
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development"
}) => {
const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 
}) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
<<<<<<< HEAD
}
=======
}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
