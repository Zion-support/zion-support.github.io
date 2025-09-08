import React from 'react';import React, { ReactNode } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Header from '../Header';
import Footer from '../Footer';

;
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

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
  return (
    <div className="min-h-screen bg-white">;
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min-h-screen bg-white">;
      <Header />;
      <main>;

  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;

<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
    <div className="min-h-screen bg-white">;
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min-h-screen bg-white">;
      <Header />;
      <main>;
        {children}
      </main>;
      <Footer />;
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;
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
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>)"; type: LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div> } " ;
}}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
}