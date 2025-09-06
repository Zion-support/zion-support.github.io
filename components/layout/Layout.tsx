<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import React from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======
import React, { ReactNode } from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
interface LayoutProps {;
  children: React && React.ReactNode;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface LayoutProps {
  children: React.ReactNode;
=======
interface LayoutProps {;
  children: React && React.ReactNode;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
<<<<<<< HEAD
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
=======
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
export default function Layout({

  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical
  ogTitle
  ogDescription
  ogImage
  noIndex = false

}: LayoutProps) {
<<<<<<< HEAD
=======
=======
const Layout: React.FC<LayoutProps> = ({ children }) => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
export default function Layout(): any ({;
  children,;
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",;
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",;
  canonical,;
  ogTitle,;
  ogDescription,;
  ogImage,;
  noIndex = false;
}: LayoutProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="min-h-screen bg-white">;
=======
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min - h-screen bg - white">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      <Header />;
      <main>;
        {children}
      </main>;
      <Footer />;
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
<<<<<<< HEAD
type LayoutProps = {children: React.ReactNode;
}
  children: React.ReactNode}
<<<<<<< HEAD
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
type LayoutProps = {children: React && React.ReactNode;
};
  children: React && React.ReactNode}

export: default function Layout() {;

  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
  "./Footer"import Footer  from "react./Footer,;
export default function Layout(): any ({ children }: LayoutProps) {;
  return (
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
export: default /**
 * Layout - Function description
 */
function Layout() {
;
  return: <div>{children}</div>;
React from";
  "react""import Footer from './react';
  "./Footer"import Footer  from "react./Footer,
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
<div className="min - h-screen flex flex - col>      <Header />"      <main className="flex - 1 pt - 16>        {children}"      </main><Footer />;
    </div>)"; type: LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div> } " ;
}}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
