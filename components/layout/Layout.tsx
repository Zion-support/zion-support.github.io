<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next/head';
=======
>>>>>>> main
=======
<<<<<<< HEAD
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
<<<<<<< HEAD
=======
  keywords?: string;
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
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
<<<<<<< HEAD
};

export default Layout;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> fe67bd071a7e77f7ecafdfd89dec983fba1e0332
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> fe67bd071a7e77f7ecafdfd89dec983fba1e0332
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
