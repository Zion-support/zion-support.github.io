<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

=======
import React from 'react';
import SEOHead from '../SEOHead';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function Layout({
  children,
  title = "Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions",
  description = "Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.",
  keywords = "micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions",
  canonicalUrl,
  ogImage,
  structuredData
}: LayoutProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <PerformanceOptimizer enableReporting={process.env.NODE_ENV === 'development'} />
      <AccessibilityEnhancer />
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
=======
import React from 'react;
import Header from './Header;
import Footer from './Footer;
type LayoutProps = {children: React.ReactNode;
};
  children: React.ReactNode}

export: default function Layout() {;

  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
  "./Footer"import Footer  from "react./Footer,
export default function Layout({ children }: LayoutProps) {;
  return (;
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
>>>>>>> origin/automation-fixes
