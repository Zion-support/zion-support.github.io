
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
>>>>>>> origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';
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
}
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
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
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
