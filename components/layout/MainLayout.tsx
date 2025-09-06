<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import Footer from './Footer';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
import Layout from './Layout';



;
interface MainLayoutProps {
interface MainLayoutProps {;
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}
const MainLayout: React.FC<MainLayoutProps> = ({

  children
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.'
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions'
  canonical
  noindex = false
  nofollow = false
  type = 'website'
  image = '/og-image.jpg'
  url
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import React from 'react';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface MainLayoutProps {
<<<<<<< HEAD
=======
  title: string,
  description: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  children: React.ReactNode;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        {children}
=======
export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "AI solutions, IT services, micro SaaS, technology consulting",
  canonical 
}: MainLayoutProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return (
    <>
      <Head>
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
        
        {/* SEO */}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

        <meta name="keywords" content={keywords} />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        {canonical && <link rel="canonical" href={canonical} />}
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
=======
      
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEOHead title={title} description={description} />
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      <div className="min-h-screen flex flex-col">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <Header />
        <main className="flex-1">
          {children}
        </main>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <Footer />
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};

export default MainLayout;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}
<<<<<<< HEAD
=======
};

export default MainLayout;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
};

export default MainLayout;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
