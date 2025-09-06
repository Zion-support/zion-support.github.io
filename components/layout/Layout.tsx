import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}
export default function Layout({
<<<<<<< HEAD
  children;
  title;
=======
  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical
  ogTitle
  ogDescription
  ogImage
  noIndex = false
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
<<<<<<< HEAD
}
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
type LayoutProps = {children: React.ReactNode;
}
  children: React.ReactNode}
export: default function Layout() {return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
=======
};
}

export default Layout;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
